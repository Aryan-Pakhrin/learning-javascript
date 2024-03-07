const emoji=document.querySelector("#emoji")

const emojis=["🤣","😁","😒","😢"]

emoji.addEventListener("mouseover",()=>{
    emoji.innerHTML=emojis[Math.floor(Math.random()*emojis.length)]
})


const click=document.querySelector(".click")

const text=["A","b","c","d","clickme"]

click.addEventListener('click',()=>{
    click.innerHTML=text[Math.floor(Math.random()*text.length)]
})