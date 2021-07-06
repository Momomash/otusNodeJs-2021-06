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

    function getString(obj, paddings = []) {
        for (let prop in obj) {
            if (Array.isArray(obj[prop])) {
                for (let i = 0; i < obj[prop].length; i++) {
                    const symbol = i !== obj[prop].length - 1 ? '├' : '└'
                    getString(obj[prop][i], [...paddings, symbol])
                }
            } else {
                result += getRenderStringForTreeStructure(obj[prop], paddings)
            }
        }
    }

    return result.slice(2, result.length)
}

module.exports = getTreeStructure;
