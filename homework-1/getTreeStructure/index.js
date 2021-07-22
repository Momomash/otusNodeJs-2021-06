const getRenderStringForTreeStructure = require('../utils/getRenderStringForTreeStructure');

function getTreeStructure(structure) {
    let result = [];

    getString(structure, []);

    function getString(obj, paddings = [], isLast = false) {
        let paddingsForLastElement = [...paddings]
        if (isLast && Object.keys(obj).length > 1) {
            paddingsForLastElement[paddingsForLastElement.length -1] = ' '
        }
        for (let prop in obj) {
            if (Array.isArray(obj[prop])) {
                for (let i = 0; i < obj[prop].length; i++) {
                    getString(obj[prop][i], [...paddingsForLastElement, '|'], i === obj[prop].length - 1)
                }
            } else {
                result.push(getRenderStringForTreeStructure(obj[prop], [...paddingsForLastElement.slice(0, paddingsForLastElement.length - 1), isLast ? '└' : '├']))
            }
        }
    }
    result[0] = result[0].slice(3, result[0].length)
    return result.join('\n')

}

module.exports = getTreeStructure;
