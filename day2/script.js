// primitive data types 

// 7 types 
// 1.string 2.number 3.boolean 4.null 5.undefined 6.symbol-used to make the value unique 7.bigint
 
// lets see the use of Symbol
const id=Symbol("123")
const anotherId=Symbol("234")
console.log(id==anotherId);
// result will show false because of symbol represents the uniqueness

// Array
const sup=['as','sad']

// Object
let obj={
    name:'arya'
}

let myfunc=function(){
    console.log(hello);
}

// non primitive data types( reference )
// 1.array 2.objects 3.functions