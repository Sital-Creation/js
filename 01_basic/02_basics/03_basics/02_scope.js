let a =300
if(true){
let a =10
const b =20
console.log("INNER:",a);

}
console.log(a);
function one(){
    const username ="hitesh"
    function two(){
        const website ="youtube"
        console.log(username);
    }
    two()
}
one()
if (true){
    const username ="hitesh"
    if(username=="hitesh"){
        const website =" youtube"
        console.log(username + website);
    }
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5))
function addone(num){
    return  num +1
}//it run bcz declartaion ke pehel kar sakte ho
const addTwo =function(num){
    return num+2
}
addTwo(5)//this is not run bcz varible mai function  hold karke declaration kia gay hai 
