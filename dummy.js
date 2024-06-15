function hello() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("hello ji this is love babber and I am here to help you with data structures and algoritmn")
            resolve("Code run: Success");
        
    },2000)
})
}
async function getdata(){
    const res = await hello()
    console.log(res)
} 
getdata()

