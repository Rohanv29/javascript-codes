// const user={
//     username:"hitesh",
//     price:999,
    
//     welcomeMessage: function(){
//         console.log(`${this.username},welcome to website`);
//         // console.log(this);
        
//     }
// }
// // user.welcomeMessage()
// // user.username="sam"
// // user.welcomeMessage()
// console.log(this)
// function chai(){
//     let username="rohan"
//     console.log(this.username);
// }
// chai();
//  
// const addTwo=(num1,num2) =>{
//     return num1+num2;
// }
// const addTwo=(num1,num2) =>  num1+num2;
const addTwo=(num1,num2)=>({username:"Rohan"})
console.log(addTwo(2,3));
