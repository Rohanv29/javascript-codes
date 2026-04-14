// import React from "react"   
// const { use } = require("react");

//_________STACK MEMORY____________________
let abcid="rohan786"
let verma=abcid
verma="Arpit"
console.log(abcid);
console.log(verma);
//________HEAP MEMORY________________________
let user1={
    email:"user@gmail.com",
    upiId:"user@ybl"
}
let user2=user1
user2.email="rohan@gmail.com"
console.log(user1.email);
console.log(user2.email);