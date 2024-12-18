const mongoose = require('mongoose');

const userSchema=mongoose.Schema({
    email:{type:String,required:true},
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    NIDNumber:{type:Number,required:true},
    phoneNumber:{type:String,required:true},
    password:{type:String,required:true},
    bloodGroup:{type:String,required:true},
},{ timestamps: true,versionKey:false }
);

const usermodels=mongoose.model('users',userSchema);
module.exports=usermodels;