const list =
[
{ 
    accoundId: 1,
    name:'vivek' 
},

{ 
    accoundId: 2,
    name: 'Zainab'
} ,

{ 
    accoundId: 3,
    name: 'Rahul'
}

    ]

function Myfunction(item,index,array) {
    item.accoundId = item.accoundId + 3;
}
// list.forEach(function (item) {
//     console.log(item.accountId, '-->', item.name)
// });

// list.forEach((item) => {
//     console.log(item.accountId, '-->', item.name)
// })
list.forEach(Myfunction)
// Note: callback function generally three arguments 
console.log(list)
