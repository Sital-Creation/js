//#Primitive

const { useImperativeHandle } = require("react");

//7 types : String,Number,Boolean,null,undefined,Symbol,BigInt
const score =100
const scoreValue =100.3

const isLoggedIn =false
const outsideTemp =null
let userEmail;
const id =Symbol('123')
const anotherId =Symbol('123')
console.log (id===anotherId);
const bigNumber = 97987979797877n

//reference(Non Primitive)
//Array,Objects,Functions
const heros = ["shaktiman","naagraj","doga"];
let myObj={
    nmae:"sital",
    age:21,
}
const myFunction =function(){
    console.log("Hello world");
}
console.log(typeof scoreValue);
//undefined="undefined"
//Null="object"
//Boolean="booleans"
//Number="number"
//String="string"
//object (native and doesnot implement [[Call]])="object"
//Object(native or host and does implement[[call]])="function"
//Object( host and does implement[[call]])=implement defined except may not be "undefined","boolean",
//"number" or "string".
