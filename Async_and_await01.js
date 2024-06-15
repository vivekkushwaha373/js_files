function myprmoise(mydata) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("got data : ", mydata)
            resolve("success")
         },2000)
     })
}

async function execute() {
    console.log("getting first data")
    await myprmoise(1).then((res)=>{console.log(res)});
    console.log("getting Second data")
    await myprmoise(2).then((res) => { console.log(res) });
    console.log("getting Third data")
    await myprmoise(3).then((res) => { console.log(res) });
} 
execute()
