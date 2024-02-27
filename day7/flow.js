// if (2==="2") {
//     console.log("executes");
    
// }
// else{
//     console.log("no");
// }
// <,>,<=,>=,!=,==,===


// const score=200
// if (score>100) {
//     const pow="fly"
//     console.log(`user pow${pow}`);
    
// }

// const balance=1000
//if (balance>500) console.log("yes");/* implicit scope*/

// if (balance<500) {
//     console.log("less than");
// }else if(balance<750){
//     console.log("less than 750");
// }else if(balance<900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const userIsLoggedIn=true
const debitCard=true
const loggedInFromGoggle=false
const LoggedInFromEmail=true

if (userIsLoggedIn && debitCard) {
    console.log("allow to buy course");
}
if(loggedInFromGoggle || LoggedInFromEmail){
    console.log("allow to log in");
}