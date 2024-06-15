//Note Scope in Node is different from the scope inn console of google
function one()
{
    const username="vivek"
    function two()
    {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website);
    two()
}
one()

function addone(value) {
    return value+1
}
console.log(addone(6))

//Note: function declaration in an expression can't be called with a function call above the definition of the function