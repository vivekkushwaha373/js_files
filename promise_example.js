// function getpromise()
// {
//     return new Promise(function (resolve, reject) {

//         setTimeout(() => {
//             console.log("hello ji this is love babber")
//             resolve("Success")
//         }, 3000)
//     })
// }
let promise = new Promise(function (resolve, reject) {

    setTimeout(() => {
        console.log("hello ji this is love babber")
        resolve("Success")
    },3000)
})

// getpromise().then((res) => {
//           return getpromise()
// }).then((res) => {
//     return getpromise()
// })

 promise.then((res)=>{
  return promise
 }).then((res)=>{
 return promise
 }).then((res)=>{
   
 })
