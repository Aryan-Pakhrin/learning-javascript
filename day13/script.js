const form=document.querySelector('form')

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)

    const results=document.querySelector('#results')

    if(height=="" || height<0 || isNaN(height)){
        results.innerHTML="please  give valid value"
    }
    else{
        const bmi=(weight/((height*height)/1000)).toFixed(2)
        results.innerHTML=bmi
    }


})