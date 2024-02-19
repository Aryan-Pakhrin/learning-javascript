// arrays

// const myArr=[0,1,2,3,4,5]
// console.log(myArr[0]);

// const myarr2 = new Array("aryan","nkjsd","kjfhk")
// myArr.push(7)
// console.log(myArr);
// myArr.pop()
// myArr.unshift(9) add in first element
// myArr.shift() removes first Element
// console.log(myArr);
// const newco= myArr.join() converts the arrays in strings
// console.log(typeof newco);

// const newmp1=myArr.slice(1,3)
// includes 1 but not 3

// const newmp2=myArr.splice(1,3)
// includes 1 and count up to 3 and then it removes

// console.log(newmp1);
// console.log(newmp2);

// array2

const marverl =["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]
// marverl.push(dc)
// const newarr=marverl.concat(dc)
// console.log(newarr);

const allnewheros=[...marverl,...dc]
// spread operator i.e is used to combine two arrays
// console.log(allnewheros);

// console.log(marverl);
// console.log(marverl[3][1]);

// array under array
const arr= [1,2,[3,4,[5,6,[7,8,9,0]]]]
const newarr=arr.flat(Infinity)
console.log(newarr);

// to check Array
console.log(Array.isArray("aryan"));
console.log(Array.from("aryan"));/* converts the string into an array */

console.log(Array.from({name:"aryan"}));

let score1=100
let score =200
let scoew3=300
// console.log(Array.of(scoew3,score,score1)); converts the chunk of number in an array