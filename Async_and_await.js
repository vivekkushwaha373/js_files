
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Running my first promise")
            resolve("success : first promise")
        }, 2000);
    })
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Running my Second promise")
            resolve("success : Second promise")
        }, 2000);
    })

async function hello() {
    let ans1=await p1
    let ans2 = await p2
    console.log(typeof ans1)
}
//this is function Call  
hello()