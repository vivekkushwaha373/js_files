// const tinderUser = new Object()//singleton Object
const tinderUser = {} //it is not a singleton Object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser)
const regularUser = {
    email: "vivekkushwaha734@gmail.com",
    fullname: {
        userfullname: {       //Object nesting
            firstname: "vivek",
            lastname: "kushwaha"

        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({/*additional parameter : target*/ }, obj1, obj2)
const obj3={...obj1,...obj2}
// console.log(obj3);


// array of Objects
const users = [
    {
        id: 1,
        email:"helloji765@gmail.com"
        
    },
    {
        id: 1,
        email:"Lhelloji765@gmail.com"
        
    },
    {
        id: 1,
        email:"helloji765@gmail.com"
        
    },
    
]
console.log(users[1].email)
console.log(Object.keys(tinderUser))//returs an array
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('isLoggedOut'))
