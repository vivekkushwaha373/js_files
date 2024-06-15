function rectangle(l,b) {
    this.len = l,
        this.bre = b,
        this.print = function () {
        console.log("area of rectangle is: ", l*b)
        }
}
const obj1 = new rectangle(2, 3)
console.log(typeof(obj1))
console.log(obj1.print())
console.log(typeof rectangle)