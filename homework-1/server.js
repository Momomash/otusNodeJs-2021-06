const getTreeStructure = require('./getTreeStructure');

console.log(
    getTreeStructure({
    "name": 1,
    "items": [
        {
            "name": 2,
            "items": [
                {
                    "name": 3,
                    "items": [
                        {
                            "name": 7
                        }
                    ]
                },
                {
                    "name": 4
                }
            ]
        },
        {
            "name": 5,
            "items": [
                {
                    "name": 6
                },
                {
                    "name": 8
                }
            ]
        }
    ]
})
)