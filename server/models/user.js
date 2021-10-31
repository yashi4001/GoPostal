//requiring mongoose
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//defining structure of user schema
const User=new Schema({
    uid:{
        type:String,
        required:true,
        description:'ID of user',
        unique:true
    },
    name:{
        type:String,
        required:true,
        description:'Name of user'
    },
    email:{
        type:String,
        unique:true,
        required:true
    }
});

const user=mongoose.model('User',User);

//exporting user schema
module.exports=user