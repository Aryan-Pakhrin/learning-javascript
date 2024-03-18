// const user={
//     username:"hites",
//     getuser:function(){
//         console.log(this.username);
//     }
// }
// console.log(user.username);
// console.log(user.getuser());

function user(username,login,isLoggedin) {
    this.username=username
    this.login=login
    this.isLoggedin=isLoggedin

    // return this
}
const userone=new user("hi","foo","cow")
const usertwo=new user("po","ko","so")
console.log(userone);
console.log(usertwo);