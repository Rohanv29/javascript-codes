// const user={
//     username:"Rohan",
//     loginCount:8,
//     signedIn:true,

//     getUserDetails:function(){
//         // console.log("got user details from database");
//         // console.log(`username:${this.username}`)
//         console.log(this);
        
//     }
// }

// console.log(user.username);
// // console.log(user.getUserDetails())
// console.log(this);


function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    this.greeting=function(){
        console.log(`welcomme ${this.username}`);
        
    }
    return this;
}

const userOne=new User("Rocky",12,true);
console.log(userOne.constructor);

// const userTwo=new User("Rocky_BHAI",15,false);
// console.log(userTwo);

