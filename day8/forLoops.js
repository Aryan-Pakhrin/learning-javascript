//for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
    
// }

// for(let i=0;i<=10;i++){
//     // console.log("outer loop"+i);
//     for(let j=0;j<=10;j++){
//         // console.log(`innerloop ${j} and inner loop ${i}`);
//         console.log(i+'*'+ j +"="+i*j);

//     }
// }

// let myarr=["bat","iron","super"]
// for (let index = 0; index < myarr.length; index++) {
//     const element = myarr[index];
   
//     console.log(element);
    
// }
// console.log(myarr[0]);

//keywords
for (let index = 1; index <=20; index++) {
    if (index==5) {
        console.log("5 detected");
        continue
        
    }
    console.log(index);
    //continue won't print the next thing that needs to be printed
    
}