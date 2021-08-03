const getDirectoryTree = require('./getDirectoryTree');
const serializeTree = require('./serializeTree');

const argsLength = process.argv.length;
console.log(serializeTree(getDirectoryTree(process.argv[argsLength - 2], process.argv[argsLength - 1])))