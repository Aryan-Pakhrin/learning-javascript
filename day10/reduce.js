const mynums=[1,2,3,4,5,6,7,8,9,10]

const mytota=mynums.reduce((acc,cum)=>{
    return acc+cum
},0
)
console.log(mytota);