const user = {
    username: "vivek",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}
console.log(user.welcomeMessage())
user.username = 'Sam';
console.log(user.welcomeMessage())

// console.log(this) //will give empty Object in node

//array function
// const addtwo = (n1, n2) => { num: 1 } it will not work
const addtwo = (n1, n2) => ({ num: 1 })
// implicite return using paranthesis
console.log(addtwo(3, 4))     
const myarray = [1, 2, 3, 4, 5]
myarray.forEach()
