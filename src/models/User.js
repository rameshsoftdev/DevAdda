const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName : {
        type:String,
        required:true,
        minlength:4,
        maxlength:50
    },
    lastName : {
        type:String
    },
    emailId : {
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true
    },
    password : {
        type:String,
        required:true
    },
    gender : {
        type:String,
        validate(value){
            if(!["Male","Female","Other"].includes(value)){
                throw new Error("Please enter valid Gender");
            }
        }
    },
    photUrl:{
        type:String,
        default: "https://images.app.goo.gl/oACHE7phxDF2Z5X19"
    },
    age : {
        type:Number,
        min:18
    },
    skills: {
        type:[String]
    }
},{
    timestamps:true
})

module.exports = mongoose.model("User",userSchema);