const user = {
    username: "hitseh",
    loginContent: 8,
    signedOut: true,

    getUserDetails: function () {
        console.log("hello ji this is hitesh")
        console.log(this.username)
        console.log(this)
    }
}

console.log(user.getUserDetails())
console.log(this)  //it is global context for of node js environment
