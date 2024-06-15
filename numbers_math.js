const score = 4000000.56745
let str = score.toString()
console.log(typeof str)
console.log(score.toFixed(10))
console.log(score.toPrecision(4))
console.log(score.valueOf(65))
console.log(score.toLocaleString('en-IN'))
//<---------------maths----------------->
console.log(Math.abs(-9))
console.log(Math.ceil(6.7))
console.log(Math.floor(6.7))
console.log(Math.sqrt(36))
console.log(Math.max(36,100,78))
console.log(Math.min(36,100,78))
console.log(Math.round(36.4))
console.log(Math.random())//it gives value between 0 and 1
console.log(Math.ceil(Math.random() * 10 + 1))
console.log(Math.floor(Math.random() * (20-10+1) + 10))
