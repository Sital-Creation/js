const userEmail = "h@hitesh.ai" 
if (userEmail){
    console.log("Got user email");
}else{
    console.log("Dont have user email");
}
// falsy values
//false,0,-0,BigInt 0n,"",null,undefined,NaN
//truthy value
//"0",'false'," ",[],{},function(){}
   //const userEmail =   [] arry check kein below
if(userEmail.length===0){
    console.log("Array is empty")
}
const emptyObj = {}
if (Object.keys(emptyObj).length ===0){
   console.log("Object is empty")
}
//nullish coalescing Operator (??): null undefined
let val1;
//val1 = 5 ?? 10   //5
//val1 = null ?? 10  //10
//val1 =undefined ?? 15
//val1=null??10??20//10
console.log(val1);
//terniary Operator
//condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80"): console.log("more than 80")//more than 80
