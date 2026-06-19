// let val1=10;
// let val2=4;
// function addnum(num1,num2){
//     let total =num1+num2;
//     return total;
// }
// let result1=addnum(10,20);
// let result2=addnum(val1,val2);
// console.log(result1);
// console.log(result2);

// =====================================================
function one(){
    console.log("one");
    two();
}
function two(){
    console.log("two");
    three();
}
function three(){
    console.log("three");
}
one();
two();
three();