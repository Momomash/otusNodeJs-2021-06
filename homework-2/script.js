const stream = require("stream");
const fs = require("fs");

const commonConstants = require('./commonConstants');
const getRandomNumberGenerator = require('./utils/getRandomNumberGenerator');
const liner = require('./utils/liner');

// configurable variables
const FILE_SIZE = commonConstants.MEGABYTE * 0.5
const QUANTITY_OF_FILES = 5;

// ========================
// Step 0 - createFile with random numbers
// ========================


const readableStream = stream.Readable.from(getRandomNumberGenerator(FILE_SIZE, 0, 1000), {encoding: 'utf8'});
let writeStream = fs.createWriteStream(commonConstants.INITIAL_FILE_PATH)
readableStream.pipe(writeStream)

writeStream.on('finish', () => {
    console.log(`created a file with random numbers from 0 to 1000, size ${FILE_SIZE}MB.`);
});


// ========================
// Step 1.1 - split the file into several
// ========================

fs.createReadStream(`./${commonConstants.INITIAL_FILE_PATH}`).pipe(liner)
let streams = [];
let line
let orderOfFile = 0;
for (let i = 0; i < QUANTITY_OF_FILES; i++){
    streams.push(fs.createWriteStream(`chunkFile-${i}.txt`))
}

liner.on('readable',  () => {
    while (null !== (line = liner.read())) {
        streams[orderOfFile].write(`${line}\n`)
        orderOfFile = orderOfFile === QUANTITY_OF_FILES - 1 ? 0 : orderOfFile + 1
    }
})
liner.on('end', () => {
    console.log(`the initialFile.txt has been split into ${QUANTITY_OF_FILES}`)
})
fs.unlink(commonConstants.INITIAL_FILE_PATH, (err => console.log(err ? 'err' : 'initialFile has been deleted')))
