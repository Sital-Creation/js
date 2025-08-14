for ( let a =0; a <=10; a++){//1-10
    const element = a;
    if (element ==5 ){
        console.log("5 is best number")
    }
    console.log(element)
}
for (let i = 0; i < array.length; i++) {
    console.log('Outer loop value:${i}');
    for (let j = 0; j < array.length; j++) {
        //console.log('inner loop value:${j}');
        console.log(i+ '*' + j+' = ' + i*j  );//1 se 10 table print hogi
    }
}
let myArray = ["flash","batman","superman"]
console.log(myArray.length);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}
//break and continue
for (let index = 1; index <=20; index++) {
 if (index ==5){
    console.log(`Detected 5`);
   // break//5 tak hni print ho gi
   //continue //5 ko chod ke aur baki print ho jayegi
 }
 console.log(`value of i is ${index}`);
}