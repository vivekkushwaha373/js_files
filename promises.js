// let promise = new Promise((resolve,reject) => {
//     console.log("Hello ji this is love babber")
//     resolve("success")
// })
function Greet() {
   return new Promise((resolve, reject) => {
       
       setTimeout(function () {
           console.log("hello ji! Good morning, this is love babber");
           reject("error")
           resolve("success")
       },5000)
    
       
    })
}

let result = Greet()
result.then((res) => {
    console.log(res)   //res is the what resolve holds
})
result.catch((err) =>{
    
    console.log(err) //
})