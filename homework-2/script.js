const commonConstants = require('./commonConstants');
const step0 = require('./steps/step0');
const step1 = require('./steps/step1');


// configurable variables
const FILE_SIZE = commonConstants.MEGABYTE * 0.5
const QUANTITY_OF_FILES = 5;

(async () => {
    await step0(FILE_SIZE)
    await step1(QUANTITY_OF_FILES)
})();
