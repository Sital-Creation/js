//#Primitive

const { useImperativeHandle, useInsertionEffect } = require("react");

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
//======================================================================
//Stack (primitive),heap(Non-primitive)
let myName="Sital Sabat"
let anotherName=myName
anothername="ruchi"
console.log(myName)
console.log(anothername)
let user= {
    email:"Sital@gmail.com",
    upi:"user@ybl"
}
let userTwo = userOne
userTwo.email = "Sital12@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



