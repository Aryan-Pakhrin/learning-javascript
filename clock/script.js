const clock=document.getElementById('clock')


setInterval(()=>{
let date=new Date()
const local=date.toLocaleTimeString();
clock.innerHTML=local

},1000)