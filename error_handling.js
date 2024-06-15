let a;
fun = function () {
    throw "Invalid function call"
}
try
{
    console.log("try block starts here");
    fun()
    console.log("try block ends here");
}
catch (e)
{
    //catch clock defines error ke sath ap kya karna chahte hai

    console.log("Your error is here :", e);
}
finally {
    console.log("I will run every time no matter what ")
}