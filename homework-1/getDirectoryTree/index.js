const fs = require('fs');

function getDirectoryTree(dir) {
    const structure = {name: dir.split('/').pop(), items: []}
    const files = fs.readdirSync(dir);
    files.forEach(name => {
        const absolutePath = `${dir}/${name}`
        let newItem = {name}
        if (fs.statSync(absolutePath).isDirectory()) {
            newItem = getDirectoryTree(absolutePath)
        }
        structure.items.push(newItem)
    })
    return structure;
}

module.exports = getDirectoryTree;
