const user = {
    username:"hitesh",
    price:999,

    welcomeMessage: function(){
     console.log(`${this.username} , welcome to website`);//backtic use
     console.log(this);//sari value aajati hai sam and hitesh dono ki username and price aa jayegi(cuurent context)
    }
}
user.welcomeMessage()
user.username ="Sam"
user.welcomeMessage()
//console.log(this);//{}
//function chai (){
   // let username ="hitesh"
   // console.log(this.username);//undefined (function mai this use nahi ho pa rah hai is type but object ka hoga)
//}
//chai()
//const chai = function(){
 //   let username ="hitesh"
  //  console.log(this.username);//undefined
//}
const chai = () =>{
    let username = "hitesh"
    console.log(this);//{}
}
chai ()//{}

//const addTwo = (num1,num2) =>//1 type explicity
{
    return num1 +num2
}
//console.log(addTwo(3,4));//7
//const addTwo = (num1,num2) => (num1 + num2)//2 type implicity
//console.log(addTwo(3,4));//7
const add = (num1,num2) => ({username:"hitesh" })//use curly braces for object o/p

//const myArray =[2,5,3,7,8]
//myArray.forEach()
