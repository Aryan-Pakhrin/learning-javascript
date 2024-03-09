const btns=document.querySelectorAll(".btn")
const body=document.body

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        color=btn.value
        chnageColor(color)
    })
})

function chnageColor(color){
    switch (color) {
        case "purple":
            body.classList.add("purple")
            break;
    
        default:
            break;
    }
}

const click=document.querySelector(".click")
const emojis=["😆","😁","😢","😅","🤳"]
const para=document.querySelector(".emi")

click.addEventListener("click",()=>{
    para.innerHTML=emojis[Math.round(Math.random()*emojis.length)]

})
