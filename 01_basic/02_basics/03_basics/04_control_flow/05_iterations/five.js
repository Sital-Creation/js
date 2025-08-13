const coding =["js","ruby","java","python","cpp"]
// coding.forEach( function (val){
// console.log(val);//js,ruby line by line print
// })
coding.forEach((item)=>{
    console.log(item);
})
function printMe(item){
    console.log(item);
}
coding.foreach(printMe)
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})
const myCoding =[
    {
        langauageName:"javascript",
        languageFileName:"js"
    },
    {
        langauageName:"java",
        languageFileName:"java"
    },
    {
        langauageName:"python",
        languageFileName:"py"
    },
]
myCoding.forEach((item) => {
    console.log(item.languageName);//javascript,java,python
})