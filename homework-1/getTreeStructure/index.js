const getRenderStringForTreeStructure = require('../utils/getRenderStringForTreeStructure');

function getTreeStructure(structure) {
    let result = '';

    getProp(structure, 0);

    function getProp(obj, depth = 0) {
        for (let prop in obj) {
            if(Array.isArray(obj[prop])) {
                obj[prop].forEach(item => getProp(item, ++depth))
            } else {
                result += getRenderStringForTreeStructure(obj[prop], depth)
            }
        }
    }

    return result.slice(4, result.length)
}

module.exports = getTreeStructure;