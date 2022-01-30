const getRandomArbitrary = require("../utils/getRandomArbitrary");
const commonConstants = require("../commonConstants");

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

module.exports = getRandomNumberGenerator;
