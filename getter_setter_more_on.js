/*
const myobject = {
    myname: 'vivek',
    password: "vivkush734@gmail.com",
    isLoggedin: true,

}
//it is used to create a property not a method
Object.defineProperty(myobject, '_mynam', {
    get: function () {
        return myobject.myname
    }
})

console.log(myobject._mynam)

*/
function create(myname,password) {
    this._myname = myname;
    this._password = password;
    this.get= function() {
        return this.myname
    }
    Object.defineProperty(this, 'myname', {
        //definintion likh dunga
        get: function () {
            return this._myname;
        }  
    })
}
const Ob1 = new create('vivek', "helloji734@gmail.com")
console.log(Ob1.myname)