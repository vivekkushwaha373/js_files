// this is inheritance in javascript
const inheritedcalss = {
    username: "vivek",
    userid: 12,
    getmydata: function () {
        console.log(`${this.username} and ${this.userid}`)
    }
};
const baseclass = {
    
    isloggedin: true,
    __proto__: inheritedcalss,
    getmydata: function () {
        console.log(`${this.username} and ${this.userid} and ${this.isloggedin}`)
    }
};
console.log(baseclass.getmydata())