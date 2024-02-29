// for of
// const arr=[1,2,3,4,5]
// for (const i of arr) {
//     console.log(i);
    
// }

// const greeting="hello world"
// for (const greet of greeting) {
//     console.log(greet);
// }

//maps

const map=new Map()
map.set('in','india')
map.set('nep','nepal')
map.set('chi','china')

// console.log(map);
for (const [key,value] of map) {
    // console.log(key,value)
    
}
//map doesnot constain duplicate value

// const myobj={
//     'game1':'nfs',
//     'game2':'spiderman',

// }

// for (const [key,value] of myobj) {
//     console.log(key,value);
    
// }
//onj is not iteratable;
// to iterate in object for-in loop is used

const myobj={
    'game1':'nfs',
    'game2':'spiderman',

}
for (const key in myobj) {
    // console.log(key +myobj[key]);
    
}

const arr=["js","ruby","python"]
for (const key in arr) {
    console.log(arr[key]);
    }
