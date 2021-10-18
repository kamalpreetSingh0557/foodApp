const mongoose=require('mongoose');
const db_link='mongodb+srv://user_JO:jopaajibackend@cluster0.flq2w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const validator = require("email-validator");
mongoose.connect(db_link).then(function(db){ // promise based function [.then]
    //console.log(db);
    console.log('db connected');
})
.catch(function(err){
    console.log(err);
});
 
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:function(){
            return validator.validate(this.email);
        }
    },
    password:{
        type:String,
        required:true,
        min:8
    },
    confirmPassword:{
        type:String,
        required:true,
        min:8,
        validate:function(){
            return this.password==this.confirmPassword
        }
    }
});

// First Arguement :- Naam kya hona chaiye model ka, usually jo variable ka naam rkha hai wo hi rkhte hain
// Second Arguement :- Schema ka naam 

const userModel=mongoose.model('userModel',userSchema); 

(async function createUser(){
    let user={
        name:'Jo',
        age:20,
        email:'abcd@gmail.com',
        password:'12345678',
        confirmPassword:'12345678'
    };
    let userObj=await userModel.create(user);
    console.log(userObj);
})();