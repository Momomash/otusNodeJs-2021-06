// ========================
// Step 0 - createFile with random numbers
// ========================
const stream = require("stream");
const fs = require("fs");

const getRandomNumberGenerator = require("../utils/getRandomNumberGenerator")
const commonConstants = require("../commonConstants")

const step0 = async (fileSize) => {
    await new Promise((resolve, reject) => {
        const readableStream = stream.Readable.from(getRandomNumberGenerator(fileSize, 1, 1000), {encoding: 'utf8'});
        let writeStream = fs.createWriteStream(commonConstants.INITIAL_FILE_PATH)
        readableStream.pipe(writeStream)

        writeStream.on('finish', () => {
            console.log(`created a file with random numbers from 0 to 1000, size ${fileSize}MB.`);
            resolve()
        });
        writeStream.on('error', reject);
    });
}

module.exports = step0;

