const arr = [1, 2, 3, 4, 5]
// for of works on iterables

for (const num of arr) {
    console.log(num)
}

const greetings = "hello world!"

for (const greet of greetings) {
    console.log(`each character is ${greet}`)
}
//Maps
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR', "France")
console.log(map);

for (const key of map.keys())
{
   console.log(key)    
}

for (const values of map.values())
{
   console.log(values)    
}

for (const [key,value] of map)
{
   console.log(key, ':-',value)    
}

for (const iterate of map.entries())
{
   console.log(iterate)    
}

for (const iterate of map)
{
   console.log(iterate)    
}

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift:"swift by apple"
}

// for (const key of myObject) {
//     console.log(key);
// }

const list = ["js", "py", "rb", "cpp", "c", "j"]

for (const key in list)
{
console.log(key)    
}
for (const key of list)
{
console.log(key)    
}

