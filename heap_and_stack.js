// stack (primitive)  heap(reaferance or Non primitive)
let accountId = 100202002
let accountId1 = accountId
accountId1 = 34562
console.log(accountId)
//Here we are making a copy in stack i.e which is primitive type


//Here we are not making any copy using the same reference 
let user = {
    id: 1,
    name:"sushant"
}
let Otheruser = user
Otheruser.name = "vivek"
console.log(user.name)