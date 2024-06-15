const myNums = [1, 2, 3]
const myTotal = myNums.reduce((accumulator, currentvalue) => {
    return accumulator+currentvalue
}, 0)
console.log(myTotal)