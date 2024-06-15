//now we are going to learn closure.js
function outerfunction() {
    let username = 'Vivek';
    //closore: inner function can get the scope of parentfunction i.e called closure
    
    function innerfunction() {
        console.log(username)
    }
    innerfunction()
}
outerfunction()
console.log("TOO OUTER",username)