const getRenderStringForTreeStructure = require('../utils/getRenderStringForTreeStructure');

// 1   []
// ├── 2 ['', '├']
// │ ├── 3 ['', '|', '', '├']
// │ └── 4 ['', '|', '', '└']
// └── 5  ['', '└']
// | └── 6 ['', '|', '└']
// └── 7 ['', '└']
//   └── 8 ['', '', '└']

function getTreeStructure(structure) {
    let result = '';

    getString(structure, []);

    function getString(obj, paddings = [], isLast = false) {
        for (let prop in obj) {
            if (Array.isArray(obj[prop])) {
                for (let i = 0; i < obj[prop].length; i++) {
                    getString(obj[prop][i], [...paddings, '|'], i === obj[prop].length - 1)
                }
            } else {
                result += getRenderStringForTreeStructure(obj[prop], [...paddings.slice(0, paddings.length - 1), isLast ? '└' : '├'])
            }
        }
    }

    return result.slice(3, result.length)
}

module.exports = getTreeStructure;
