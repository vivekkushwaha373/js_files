let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())

let myCreatedDate = new Date(2024, 4, 4, 5, 30);
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())
// console.log(myCreatedDate.toLocalString())
myCreatedDate = new Date("2023-01-14");
console.log(myCreatedDate.toDateString())
myCreatedDate = new Date("01-14-2023  18:9");
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())
myCreatedDate = new Date("june 20 1998  07:15");
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())
myCreatedDate = new Date()
// console.log(Math.floor(myCreatedDate / 1000));
console.log(myCreatedDate.getMonth()+1);
console.log(myCreatedDate.getDay());

