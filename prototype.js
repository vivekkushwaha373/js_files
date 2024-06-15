function helper(id) {
    console.log("hello this is helper")
    this.id=id
}

function createObject(username,isLoggedin,id) {
    this.username = username;
    this.isLoggedin = this.isLoggedin;
    helper.call(this,id)
}
const myobject = new createObject("vivek", true, 234)
console.log(myobject)
//this is what call is used for
