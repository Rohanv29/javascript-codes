class User{
    constructor(username){
        this.username=username;
    }  
    
    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const Rohan =new User ("Rohan")
// console.log(Rohan.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone=new Teacher("iphone","i@phone.com");
// iphone.logMe();
console.log(iphone.createId());

