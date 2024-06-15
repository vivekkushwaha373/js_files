let array1 = [1, 2, 3, true]
let array2 = [7.9, false, undefined]
let newArray = array1.concat(array2)
console.log(newArray)
newArray=[...array1,...array2]
console.log(newArray)
const anotherarray = [1, 2, 3, [4, 5, 6], 7, [7, 8, [9, 0]], 10]
const realanotherarray = anotherarray.flat(Infinity);
console.log(realanotherarray)
console.log(Array.isArray('Hitesh'))
console.log(Array.from('Hitesh'))
console.log(Array.of(10, 20, 40))
console.log(Array.from({ value: 34 }))// interesting case

