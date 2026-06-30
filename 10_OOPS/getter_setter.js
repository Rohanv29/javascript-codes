class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        return this._email;
    }
    get password(){
        // return  this._password.toUpperCase();
        return `${this._password}Rohan`
    }
    set password(value){
        this._password=value.toUpperCase();
    }
}
const Rohan=new User("Rohan@ai","1234")
console.log(Rohan.password);
