// const mynums=[1,2,3,4,5,6,7,8,9,10]
// const newnums=mynums.filter((nums) => nums>4)
// console.log(newnums);


const mynumbers=[1,2,3,4,5,6,7,8,9,10]
// const add=mynumbers.map((num)=>num+10)

// console.log(add);
// const addo=[]
// mynumbers.forEach((nopes)=>{
//     addo.push(nopes+10)
// })
// console.log(addo);

// chaining

const offli=mynumbers
.map((nu)=>nu*10)
.map((nu)=>nu+10)
.filter((nu)=>nu>40)
console.log(offli);