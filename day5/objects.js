// objects
// const mysym=Symbol("new")

// const jsuser={
//     name:"aryan",
//     "full name":"fullname",
//     age:18,
//     [mysym]:"mykey",
//     location:"nepal",
//     email:"Aryan@gmail.com",
//     isLogegdin:false,
//     lastLoin:["monday","saturday"]
// }
// console.log(jsuser["full name"]);

// console.log(typeof jsuser[mysym]);

// jsuser.email="hitesh@chatgtp.com"

// console.log(jsuser);
// // Object.freeze(jsuser)
// //  * after this the value inside the jsuser can't be changed
// //  */
// jsuser.email="ajksdhjash"

// console.log(jsuser);

// jsuser.greeting=function(){
//     console.log("hello");
// }
// console.log(jsuser.greeting());

// jsuser.greeting2=function(){
//     console.log(`hello,${this.email}`);
// }
// console.log(jsuser.greeting());
// console.log(jsuser.greeting2());


// ----------------------ojects------------------------


//const tinder= new Object()

const regularuser={
    email:"song@gmail.com",
    fullname:{
        userfullname:{
            firsname:"aryan",
            lastname:"pakhrin"
        }
    }
}
// console.log(regularuser.fullname.userfullname.firsname);

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3);

const arra=[
    {
        id:1,
        name:'arya'
    },
    {
        id:2,
        name:'aryam'
    }, {
        id:3,
        name:'aryas'
    }
]
console.log(arra[1].name);
// console.log(Object.keys());
// console.log(Object.values());
