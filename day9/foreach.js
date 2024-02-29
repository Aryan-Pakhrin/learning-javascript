const coding=['js','ruby','java','python']
// coding.forEach( function(val){
    // console.log(val);
// } ) 

// coding.forEach((val)=>{
//     console.log(val);

// })

coding.forEach((items,index,arr)=>{
    // console.log(items,index,arr);
})

const mycoding=[
    {
    language:'js',
    filename:'py'

},
{
    language:'css',
    filename:'dss'

},
{
    language:'c++',
    filename:'c'

}
]

mycoding.forEach((items)=>{
    console.log(items.language);

})