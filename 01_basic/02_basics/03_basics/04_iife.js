//immediately Invoked function expression (IIFE)
(function chai(){
    //named iife
    console.log(`DB Connected`);
})();//global scope declaration,variable ka polution ko hatane ke liye use kiya hai   IIFE
((name) =>{
    console.log(`DB Connected two ${name}`);
    
})(`hitesh`)