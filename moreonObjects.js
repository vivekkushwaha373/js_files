const chai = {
    myname: "vivek",
    password: "123",
    isloggeddin:true
}
console.log(Object.getOwnPropertyDescriptor(chai, "myname"))
chai.myname = "loveBabber";
console.log(chai)
Object.defineProperties(chai, 'myname', {
    writable: false,
})
// this code will not work as I changed thewritable property
chai.myname = "Zoya my love";
console.log(chai)