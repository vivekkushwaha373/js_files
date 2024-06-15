const array = [1, 2, 3.98, true, "helloji"]
array[6] = "vivek";
const myarray=new Array(1,2,3,true)
console.log(typeof array)
console.log(typeof myarray)
console.log( array)
console.log(myarray)
//array methods
myarray.push(5)
console.log(myarray)
myarray.push(7)
console.log(myarray)
myarray.unshift(9)
console.log(myarray)
myarray.unshift(10)
console.log(myarray)
myarray.shift()
console.log(myarray)
console.log(myarray.includes(5))
console.log(myarray.indexOf(3))
console.log(myarray.join())
//slice splice
console.log("A ", myarray);
const myn1 = myarray.splice(0, 3);
console.log("B ", myn1);
console.log(myarray)