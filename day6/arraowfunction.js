// const user={
//     username:"aryan",
//     price:"999",
//     welcomemessage:function(){
//         console.log(`${this.username}, welcome to website`);
// // this is used to access the current context 
//     }
// }
// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()

// arrow function

// const chai=()=>{
//     let username="aryan"
//     console.log(username);
// }
// chai()

// implicit return


// const chai=(num1, num2)=>(num1+num2)
// console.log(chai(2,3));


const chai=(num1, num2)=>({human:"hitesh"})
console.log(chai(2,3));
