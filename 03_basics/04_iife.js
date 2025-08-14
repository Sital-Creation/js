//immediately Invoked function expression (IIFE)
(function chai(){
    //named iife
    console.log(`DB Connected`);
})();//global scope declaration,variable ka polution ko hatane ke liye use kiya hai   IIFE
((name) =>{
    console.log(`DB Connected two ${name}`);
    
})(`hitesh`)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//js execution context
//{} -->global execution(this)
//browser this ki value window object
//1,global exection conext
//2.function execution conext
//3,eval execution context
//{} 2 phase run 1.memory phase (variable aur jo bhi declare kiya hai wo allocated hota hai)
// 2. execution phase (jo bhi function execute yahna hota hai)
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total= num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10,2)
//(1)Global execution--> this
//(2)memory phase -->
//val1--> undefined
//val2--> undefined
//addNum --> defination
//result1 --> undefined
//result2--> undefined
//(3) Execution phase
//val1 <--10
//val2 <--5
//addNum-->new variable + execution thread <--delete
//let result1 = addNum(val1, val2)
//let result2 = addNum(10,2)
//memory phase
//val1--> undefined
//val2--> undefined
//total -->undefined
// execution thread
//num1--> 10
//num1--> 5
//total-->15== return global execution context mai

