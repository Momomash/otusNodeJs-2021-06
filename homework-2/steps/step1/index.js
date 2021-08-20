const stream = require('stream');
const fs = require("fs");
const getRandomArbitrary = require('../../utils/getRandomArbitrary');
const commonConstants = require('../../commonConstants');

function* getRandomNumberGenerator(fileSize, minNumber = 0, maxNumber = 1000) {
    let initialFileSizeCounter = 0;
    let i = 0;
    while (initialFileSizeCounter <= fileSize) {
        const newLine = `${getRandomArbitrary(minNumber, maxNumber)}\n`
        yield newLine
        initialFileSizeCounter += newLine.length
        i++
        if (i % commonConstants.MEGABYTE === 0) {
            console.log(`Generated ${Math.round(initialFileSizeCounter / commonConstants.MEGABYTE)}mb`)
        }
    }
}

const createInitialFileWithRandomNumbers = (fileSize, minNumber = 0, maxNumber = 1000) => {
    const readableStream = stream.Readable.from(getRandomNumberGenerator(fileSize, minNumber, maxNumber), {encoding: 'utf8'});
    let writeStream = fs.createWriteStream(commonConstants.INITIAL_FILE_PATH)
    readableStream.pipe(writeStream)

    writeStream.on('finish', () => {
        console.log('created a file with random numbers from 0 to 1000, size 100MB.');
    });
}


module.exports = createInitialFileWithRandomNumbers


