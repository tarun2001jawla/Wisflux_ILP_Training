//getters/setters

class User{
    private _username : string;
    private _password : string;

    //constructor 

    constructor(_username:string,_password:string)
    {
        this._username = _username;
        this._password = _password;

    }
    

    //getters and setters
    get username(){
        return this._username;
    }

    set username(username : string){
        this._username = username;
    }

    get password(){
        return this._password;
    }

    set password(password : string){
        this._password = password;
    }
     

    //method
    getDetails():void{
        console.log(`Username is ${this._username} and password is ${this._password}`);
    }
}

let user1 = new User("admin","admin123");
user1.getDetails();

user1.password = "admin1234"
user1.username = "admin1234"
user1.getDetails();


