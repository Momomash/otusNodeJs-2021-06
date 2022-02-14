// ========================
// Step 1 - write sorted numbers to final file
// ========================

const fs = require("fs");
const commonConstants = require("../commonConstants");
const newLiner =  require("../utils/liner");
const getIndexOfSmallNumbers =  require("../utils/getIndexOfSmallNumbers");

const step2 = async (quantityOfFiles) => {
    console.log('start of step 2')
    const readableStreams = [];
    const writableStream = fs.createWriteStream(commonConstants.RESULT_FILE_PATH)
    const buffer = {};

    await new Promise((resolve, reject) => {
        for (let i = 0; i < quantityOfFiles; i++){
            const liner = newLiner();
            const stream = fs.createReadStream(`chunkFile-${i}.txt`).pipe(liner)
            readableStreams.push(stream)

            const readAndResume = () => {
                const line = stream.read()
                stream.pause()
                if (line !== null){
                    buffer[i] = Number(line)
                }
                if (Object.keys(buffer).length === quantityOfFiles){
                    const currentIndex = getIndexOfSmallNumbers(Object.values(buffer))
                    writableStream.write(`${buffer[currentIndex]}\n`)
                    delete buffer[currentIndex]
                    readableStreams[currentIndex].resume()
                }
            }

            stream.on('readable',  () => {
                readAndResume()
            })
            stream.on('resume', () => {
                readAndResume()
            })
            stream.on('error', reject)
        }
    });
    console.log('ffffff')
    console.log('buffer', buffer)
}

module.exports = step2

