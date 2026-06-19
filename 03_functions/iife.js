//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB connected`);
    
})();
// (funtion definition)  &&  (Function call)
// global scope ke pollution ki problem kko hatane ke liye IIFE ka use kia
(()=>{
    console.log(`DB CONNECTED TWO`);
})();
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})("rohan")