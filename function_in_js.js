function addTwoNumbers(num1,num2)
{
    return num1 + num2

}
const addthreenumbers = (num1, num2, num3) => num1 + num2 + num3 //arrow function
console.log(addthreenumbers(8,9,0))
console.log(addTwoNumbers(8, 9, 0))
console.log(addTwoNumbers(8, "9"))

function loginUserMessage(username="sam") {
    // if (username === undefined )
    if (!username )
    {
        console.log(typeof username)
        console.log("please enter a username")
        return
    }
    return `${username} just loggedin `
}
console.log(loginUserMessage("vivek"))
console.log(loginUserMessage())
