// ========================
// Step 1 - split the file into several and sorting
// ========================

const fs = require("fs");
const commonConstants = require("../commonConstants");
const newLiner =  require("../utils/liner");

const step1 = async (quantityOfFiles) => {
    await new Promise((resolve, reject) => {
        const liner = newLiner()
        fs.createReadStream(`./${commonConstants.INITIAL_FILE_PATH}`).pipe(liner)
        let streams = [];
        let line
        let orderOfFile = 0;
        for (let i = 0; i < quantityOfFiles; i++){
            streams.push(fs.createWriteStream(`unsortedChunkFile-${i}.txt`))
        }

        liner.on('readable',  () => {
            while (null !== (line = liner.read())) {
                streams[orderOfFile].write(`${line}\n`)
                orderOfFile = orderOfFile === quantityOfFiles - 1 ? 0 : orderOfFile + 1
            }
        })
        liner.on('end', () => {
            console.log(`the initialFile.txt has been split into ${quantityOfFiles}`)
            fs.unlink(commonConstants.INITIAL_FILE_PATH, (err => console.log(err ? 'err' : 'initialFile has been deleted')))
            resolve()
        })

        liner.on('error', reject)
    });

    await new Promise((resolve, reject) => {
        for (let i = 0; i < quantityOfFiles; i++){
            const initialFilePath = `unsortedChunkFile-${i}.txt`
            fs.readFile(initialFilePath, 'utf8',(err, data) => {
                if (err){
                    reject()
                }
                const sortedData = data.split('\n').map(i => Number(i)).sort((a,b) =>  a - b).join('\n')
                fs.writeFile(`chunkFile-${i}.txt`, sortedData, (err => console.log(err ? 'err' : `chunkFile-${i}.txt has been write`)))
                fs.unlink(initialFilePath, (err => console.log(err ? 'err' : ` ${initialFilePath} has been deleted`)))
                console.log('end of sort')
            })

        }
        resolve()
    });
}

module.exports = step1

