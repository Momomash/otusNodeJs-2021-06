const buildTreeArray = require('../utils/buildTreeArray');

function serializeTree(structure) {
    const result = buildTreeArray(structure)
    result[0] = result[0].slice(3, result[0].length)
    return result.join('\n')
}

module.exports = serializeTree;
