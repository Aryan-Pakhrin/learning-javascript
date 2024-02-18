// let myDate= new Date()
// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myDate23= new Date(2023,0,12)
//  in object numbers starts from 0 so 0 means janurary
// console.log(myDate23.toDateString());

// let myTimeStamp= Date.now() /* gives the exact date of instance */
// console.log(myTimeStamp);
// console.log(myDate23.getTime());


let newDate=new Date()
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());
// can use year months also

// console.log();
console.log(newDate.toLocaleString('default',{
    weekday:"long"
}));
