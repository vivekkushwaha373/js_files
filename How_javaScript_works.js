//this stores the global object execution context which is empty in the node
//In other words this contains definition of the object
const myAccount = {
    id: 1,
    firstName: "vivek",
    secondName: "Kushwaha",
    helloji: function(){
        console.log(this);
    }
};

myAccount.helloji()
