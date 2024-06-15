function User(username,loginCount,isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    this.greeting = function () {
        console.log(`welcome ${username}`)
    }
    // return this
}

const userOne = new User("hitseh", 12, true)
const userTwo=  new User("ChaiaurCode",11,false)
console.log(userOne)
console.log(userTwo)// it is overriding the value
console.log(userOne.constructor)