const getRenderStringForTreeStructure = (value, depth = 0, symbol = '└──') => {
    return `${depth > 1 ?new Array(depth).fill('  ').join('') : ''}${symbol} ${value} \n`
}

module.exports = getRenderStringForTreeStructure;