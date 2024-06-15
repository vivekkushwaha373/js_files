const myobject = {
    name: 'vivek kushwaha',
    isLoggedIn:true,
    email: "vivkush734@gmail.com",
    get getdata() {
        return `${this.name} ${this.isLoggedIn} ${this.password}`
    },
    set setdata(name) {
        this.name = name
    }
}
//getdata should not be used as a method it should be used as a property
console.log(myobject.getdata)
//similar set data should be used as property
myobject.setdata = "hitesh chaudhary"
console.log(myobject)
