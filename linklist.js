
function node(n) {
    this.value = n,
    this.next = null
}
const s1=new node(2)
const s2 = new node(3)
s1.next = s2
//this is link list using constructor function
console.log(s1.value,s1.next.value)

