const isUserloggedIn = true
if( 2 =="2"){//it is not equal but this is executed string not equal number but strict check "===".
    console.log("execued");
}
const temperature = 41
if ( temperature < 50){
    console.log("less than 50");
}else{
console.log("temperature is greater than 50");
}
const score = 200
if (score >100){
    const power ="fly"//Var use karne se scoop se bahr jata hai iseliye const and let use karenge
    console.log('User power: ${power}');
}
console.log('User power:${power}');

const balance = 1000
//if (balance > 500) console.log("test"),console.log("test2");//it is not right line so dont use ,
if(balance < 500){
    console.log("less than 500");
}else if (balnace < 750){
    console.log("less than 750");
}else if (balnace < 900){
    console.log("less than 900");
}else{
    console.log("less than 1200")
}
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle =true
const loggedInFromEmail =true
if (userLoggedIn && debitCard ){
console.log ("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log ("Userlogged in");
}
