const name="sital"
const repoCount =50
//console.log(name +repoCount +"Value");
console.log(`Hello my name is ${name} and my repo count is $ {repoCount}`);
const gameName =new String ("Sital-reo-rep")
console.log (gameName[0]);
console.log (gameName.__proto__);
console.log (gameName.length);
console.log (gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newString =gameName.substring(0,4)
console.log(newString);
const anotherString =gameName.slice(-1,4)
console.log(anotherString);
const newStringOne ="       Hitesh     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://sital.com/sital%20sabat"
console.log(url.replace('%20','-'))
console.log(url.includes("Sital"))//true
console.log(url.includes("game"))//false
console.log(gameName.split('-'));//[ 'Sital', 'reo', 'rep' ]