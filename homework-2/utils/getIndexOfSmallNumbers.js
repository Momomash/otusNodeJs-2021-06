const getIndexOfSmallNumbers = (numbers = []) => {
    let index = 0;
    let minNumber = 0;
    for (let i = 0; i < numbers.length; i++){
        const currentNumber = numbers[i]
        if (currentNumber < minNumber){
            index = i;
            minNumber = currentNumber
        }
    }
    return index
}

module.exports = getIndexOfSmallNumbers;
