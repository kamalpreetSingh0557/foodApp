const mongoose  = require("mongoose");
const db_link = 'mongodb+srv://user_JO:jopaajibackend@cluster0.flq2w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const validator = require('email-validator');
mongoose.connect(db_link).then(function(db){
    console.log('db connected');
})
.catch(function(err){
    console.log(err);
});

const planSchema = new mongoose.Schema({
    id:{
        type: Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    ratings:{
        type:Number
    },
    price:{
        type:Number,
    },
    delivery:{
        type:Boolean
    },
    meals:Number, // Shorthand Format
    // meals:{
    //     type:Number
    // },
    description:{
        type:String
    }
});

const planModel = mongoose.model('planModel', planSchema);