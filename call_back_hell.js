//this is called call back hell
function getData(id, myfunc) {
    setTimeout(function (){
        console.log('hello ji this is love babber and my is is: ' + id);
        if (myfunc) {
            myfunc()
        }
    } ,2000)

}

console.log('getting data 1')
getData(1, () => {
    console.log('getting data 2')
    getData(2, () => {
        console.log('getting data 3')
        getData(3, () => {
            console.log('getting data 4')
            getData(4)
        })
    })
})
//to solve the callback hell a new concept was introduced which is called promises;
