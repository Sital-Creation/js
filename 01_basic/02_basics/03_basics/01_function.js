function addTwoNumbers(number1,number2){
    console.log(number1 + number2);//1 type
    return number1 + number2//2 type
}
addTwoNumbers(3,4)//1 type
const result = addTwoNumbers (3,5)//2 type
console.log("Result:",result);//2 type
function loginUserMessage(username){
    if(!username){
        console.log("please enter a username");
        return 
    }
    return '${username} just logged in'
}
console.log(loginUserMessage("Sital"))
function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,2000));//500,2000
const user ={
    username:"hitesh",
    price:199
}
function handleObject(anyObject){
    console.log('Username is ${anyObject.username} and price is ${anyObject.price}');
  
}
//handleObject(user)
handleObject({
    username:"sam",
    price:399
})
const myNewArray = [200,400,100,600]
function returnSecondaryValue(getArray){
    return getArray[1]
}
console.log(returnSecondaryValue(myNewArray));//400




