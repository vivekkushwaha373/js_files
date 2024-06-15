class myclass{
    constructor(name,email) {
        this.myname = name;
        this.email = email
    }
    get myname() {
        return this._myname;
    }
    set myname(value) {
        this._myname = value;
    }
    // set setdata(value) {
    //     this.name = value;
    // }
}
const myobject = new myclass('vivek', 'vivkus734@gmail.com')
console.log(myobject.myname);
console.log(myobject)
