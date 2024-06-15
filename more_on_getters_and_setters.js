const myobject = {
    _myname: 'vivek', //this underscore says the property is private 
    _email: 'vivekkushwaha734@gmail.com', //this underscore says the property is private

    get myname() {
        return this._myname;
    },
    set myname(val) {
        this._myname = val;
    }
    
}
console.log(myobject.name) //here myname is a property in getter
// console.log(myobject)
myobject.myname = 'hitesh chaudhary' //here myname is a property in getter
console.log(myobject)