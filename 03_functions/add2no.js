// function addtwonum(number1,number2){//parameters
//     console.log(number1+number2);
    
// }
// addtwonum(4,6);
// addtwonum(4,"a");
// addtwonum(4,null);//arguments

// ------------------------------------------------------------------------
// function add2num(number1,number2){
//     let result=number1+number2;
//     console.log("rohan");
//     return result;
// }
// const result=add2num(3,4);
// console.log( "Result:",result);
// -----------------------------------------------------------------------
// function loginusermessage(username){
//     if(username === undefined){
//         console.log("please enter a username");
//         return;
//     }
//     return `${username} just logged in`
// }
// // console.log(loginusermessage("Rohan  "));
// console.log(loginusermessage());
// function calculateCartPrice(...num1){
//     return num1;
// }
// console.log(calculateCartPrice(3,4,5,5,67,8));
const user={
    username:"rohan",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price }`);
    
}
handleObject(user)
const newarr=[200,300,400,500]
function returnSecondValue(getarr){
    return getarr;
}
console.log(returnSecondValue(newarr));