const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const Mail=new Schema({
    subject:{
        type:String,
        required:true,
        description:"Subject of e-mail"
    },
    message:{
        type:String,
        required:true,
        description:"Message of e-mail"
    },
    sender:{
        type:String,
        required:true,
        description:"Sender of e-mail"
    },
    recipient:{
        type:Array,
        required:true,
        description:"Recipients of e-mail"
    },
    timestamp:{
        type:Date,
        required:true,
        description:"Timestamp of e-mail sent"
    }
});
const mail=mongoose.model('Mail',Mail);

module.exports=mail