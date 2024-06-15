function creatrectangle(l, h) {
    let rectangle = {
        len: l,
        height: h,
        // area() {

        // }
        // You can't access the variables of an object directly inside the function 
        area: function () {
            console.log(this.len * this.height)
        }
    };
    return rectangle;
}

const obj1 = new creatrectangle(2, 3)
console.log(obj1.area())
const obj2 = new creatrectangle(2, 4)
console.log(obj2.area())
const obj3 = new creatrectangle(3, 4)
console.log(obj3.area())