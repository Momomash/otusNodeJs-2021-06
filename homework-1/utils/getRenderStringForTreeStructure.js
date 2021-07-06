const getRenderStringForTreeStructure = (value, paddings = []) => {
    return `${paddings.join('  ')}──${value} \n`
}

module.exports = getRenderStringForTreeStructure;