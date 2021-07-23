const getRenderStringForTreeStructure = require('../utils/getRenderStringForTreeStructure');

function buildTreeArray(obj, paddings = [], isLast = false, accumulator = []) {
    let paddingsForLastElement = [...paddings]
    if (isLast && Object.keys(obj).length > 1) {
        paddingsForLastElement[paddingsForLastElement.length - 1] = ' '
    }
    for (let prop in obj) {
        if (Array.isArray(obj[prop])) {
            for (let i = 0; i < obj[prop].length; i++) {
                accumulator = buildTreeArray(obj[prop][i], [...paddingsForLastElement, '|'], i === obj[prop].length - 1, accumulator)
            }
        } else {
            accumulator = [...accumulator, getRenderStringForTreeStructure(obj[prop], [...paddingsForLastElement.slice(0, paddingsForLastElement.length - 1), isLast ? '└' : '├'])]
        }
    }
    return accumulator
}

function serializeTree(structure) {
    const result = buildTreeArray(structure, [], false, [])
    result[0] = result[0].slice(3, result[0].length)
    return result.join('\n')
}

module.exports = serializeTree;
