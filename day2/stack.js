// stack memeory --> primitive data types

// makes the copy when change in value
let myYoutubname="aryan"

let ano=myYoutubname
ano="sorry"

console.log(myYoutubname);
console.log(ano);

// heap memory -->  non primitive data types

// makes chnages on the original value when valu chnages

let myobj={
    name:"arya",
    surname:"pakhrin"
}
let obj=myobj
obj.name="aryan"

console.log(myobj.name);
console.log(obj.name);
