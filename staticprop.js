class user{
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`Username: ${this.username}`);
    }
    //static keyword is used to prevent user access this method 
    static createId() {
        return `123`;
    }
}
class Teacher extends User{
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}
const iphone=new Teacher("iphone","vivkush734@gmail.com")
const vivek = new user('vivek')
console.log(vivek.createId())
console.log(iphone.createId())
