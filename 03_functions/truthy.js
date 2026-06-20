const usermail=[]
if(usermail){
    console.log("got user email");
}
else{
    console.log("don't have user email");
}
//falsy values
//false,0,-0,BigInt On," ",NULL,undefined ,NaN
//truthy values
// "0",'false'," ",[],{},function(){}

// if(usermail.length===0){
//     console.log("array is empty");
// }
 
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty");

}
//Nullish coalescing operator (??): null undefined
let val1;
// val1=5??10; output:=> 5 phle aaya h
// val1=null??10 output:=> 10 null assign nhi hota h
// val1=undefined ??15;  output:=>15 
val1=null??undefined??14??20;
console.log(val1);


//Terniary operator
//condition ? true:false
const iceteaprice=100;
iceteaprice >=50? console.log("more than 50"): console.log("less than 50");  