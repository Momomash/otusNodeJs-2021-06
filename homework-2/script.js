const commonConstants = require('./commonConstants');
const getRandomNumberGenerator = require('./utils/getRandomNumberGenerator');
const stream = require("stream");
const fs = require("fs");

const minNumber = 0
const maxNumber = 1000
const fileSize = commonConstants.MEGABYTE * 1

// Step 0 - createFile with random numbers
const readableStream = stream.Readable.from(getRandomNumberGenerator(fileSize, minNumber, maxNumber), {encoding: 'utf8'});
let writeStream = fs.createWriteStream(commonConstants.INITIAL_FILE_PATH)
readableStream.pipe(writeStream)

writeStream.on('finish', () => {
    console.log(`created a file with random numbers from 0 to 1000, size ${fileSize}MB.`);
});



