function buildTreeArray(obj, tree = [], paddings = [], isLast = false,) {
    if (isLast && Object.keys(obj).length > 1) {
        paddings[paddings.length - 1] = ' '
    }
    Object.keys(obj).forEach(key => {
        const value = obj[key]
        if (Array.isArray(value)) {
            tree = value.reduce((accumulator, item, i, arr) => {
                return buildTreeArray(item, accumulator, [...paddings, '|'], i === arr.length - 1)
            }, tree)
        } else {
            const closingPaddings = [...paddings.slice(0, -1), isLast ? '└' : '├']
            tree = [...tree, getRenderStringForTreeStructure(value, closingPaddings)]
        }
    })
    return tree
}

function getRenderStringForTreeStructure(value, paddings = []) {
    return `${paddings.join('  ')}──${value}`
}

module.exports = buildTreeArray;