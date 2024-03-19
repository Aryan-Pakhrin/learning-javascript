// let myName="hitesh"
// console.log(myName.trueLength);


// // let myhero=["thor","spider"]

// // let heropow={
// //     thor:"hammmer",
// //     spider:"web",

// //     getSpiderpow:function(){
// //         console.log(`spidy pow is${this.spider}`);
// //     }
// // }


// // console.log(heropow.getSpiderpow());
// // Object.prototype.hitesh=function(){
// //     console.log("iam presnet in all obj");
// // }
// // Array.prototype.hey=function(){
// //     console.log("hey hello");
// // }
// // heropow.hitesh()
// // myhero.hey()
// // // heropow.hey()
// const user={
//     name:"chai",
//     email:"chai@google.com"
// }
// const teacher={
//     make:true
// }
// const teachingsupp={
//     isAvailable:false
// }
// const rasupp={
//     makeAssign:"js assign",
//     fulltime:true,
//     __proto__:teachingsupp
// }
// teacher.__proto__=user
//modern syntax

// Object.setPrototypeOf(teachingsupp,teacher);

let anotherUserName="chai"
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`tru length is:${this.trim().lenghth}`);
}
"hitesh".trueLength()