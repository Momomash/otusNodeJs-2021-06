const fs = require('fs');

function getDirectoryTree(dir, depth = -1) {
    const structure = {name: dir.split('/').pop(), items: []}
    const files = fs.readdirSync(dir);
    files.forEach(name => {
        const absolutePath = `${dir}/${name}`
        let newItem = {name}
        if (fs.statSync(absolutePath).isDirectory() && depth !== 0) {
            newItem = getDirectoryTree(absolutePath, depth - 1)
        }
        structure.items.push(newItem)
    })
    return structure;
}

module.exports = getDirectoryTree;
