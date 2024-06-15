//object literals
const mySym=Symbol("key1")
const jsuser = {
    name: "vivek",
    "full name":"vivek_kushwaha",
    age: 18,
    [mySym]:"myKey1",//to use mySym as Symbol datatype in a class 
    location: "jaipur",
    email: "vivekkushwaha734@gmail.com",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Saturday "]
    
}
console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser[mySym])
console.log(jsuser["full name"])
console.log(typeof jsuser[mySym])
jsuser.email = 'lovebabber@codehelp.com'
// Object.freeze(jsuser) //to freez the object
jsuser.email = 'Microsoft@codehelp.com'
jsuser.greeting = function(){
    console.log("hello ji this is love babber")
}
jsuser.greeting2 = function(){
    console.log(`hello ji this is ${this.name}`)
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());
// console.log(jsuser)
