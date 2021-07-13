const getRenderStringForTreeStructure = (value, paddings = []) => {
    return `${paddings.join('  ')}──${value}`
}

module.exports = getRenderStringForTreeStructure;