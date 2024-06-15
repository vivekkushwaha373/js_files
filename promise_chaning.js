function getData(mydata) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("data: "+mydata);
            resolve("Success")
            } ,4000)
    });
}
//this is called promise chaining
getData(1).then((res) => {
      return getData(2)
}).then((res) => {
    return getData(3)
}).then((res) => {
    return getData(4)
})