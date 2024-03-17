// fetch('https://something.com').then() catch() finally()

// const promiseOne= new Promise((resolve,reject)=>{
//     // do an async task
//     //db calls,cryptography task, network call

//     setTimeout(()=>{
//         console.log("async task is complete");
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promise consumed");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promisethree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"chai",email:"chai@code.com"})
//     },1000)
// })
// promisethree.then(function(user){
//     console.log(user);

// })

// const promisefour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         if(!error){
//             resolve({username:"hitesh",password:"123"})
//         }
//         else{
//             reject('Error:something went wrong')
//         }
//     },1000)
// })
// promisefour.then((user)=>{
//     console.log(user);
//     return user.username

// })
// .then(function(username){
//     console.log(username);
// })
// .catch((err)=>{
//     console.log(err);
// })
// .finally(()=>{
//     console.log("hiii");
// })

// const promisefive=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error=true
//         if(!error){
//             resolve({username:'aryan',pass:'123'})
//         }
//         else{
//             reject("error:js went wrong")
//         }
//     }, 1000);
// })

// async function consumefive(){
//     try {
//         const resonponse=await promisefive
//         console.log(resonponse);
//     } catch (error) {
//         console.log("error");
        
//     }
// }
// consumefive()

// async function getalluser(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/posts')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("error");
        
//     }
// }
// getalluser()


// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

