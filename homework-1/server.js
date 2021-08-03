const serializeTree = require('./serializeTree');
const getDirectoryTree = require('./getDirectoryTree');

console.log(
//     'task 1 \n',
//     serializeTree({
//     "name": 1,
//     "items": [
//         {
//             "name": 2,
//             "items": [
//                 {
//                     "name": 3,
//                     "items": [
//                         {
//                             "name": 7,
//                         }
//                     ]
//                 },
//                 {
//                     "name": 4,
//                 }
//             ]
//         },
//         {
//             "name": 5,
//             "items": [
//                 {
//                     "name": 6,
//                     "items": [
//                         {
//                             "name": 10,
//                         }
//                     ]
//                 },
//                 {
//                     "name": 8,
//                     "items": [
//                         {
//                             "name": 9,
//                             "items": [
//                                 {
//                                     "name": 11,
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ]
//         }
//     ]
// }), '\n',
    'task 2 \n', serializeTree(getDirectoryTree('C:\\Users\\Мария\\Pictures'))
)