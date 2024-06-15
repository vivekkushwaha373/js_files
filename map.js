const num = [1, 2, 3, 4, 5]
let ans = num.map((num) => num + 10)
console.log(ans)
// This is called chaning
ans = num.map((num) => num + 10).map((n) => n + 1)
console.log(ans)
ans = num.map((num) => num + 10).map((n) => n + 1).filter(num=>num>13)
console.log(ans)