const {Schema,model} = require("mongoose");

const Register_Schema = Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,required:true}
},{versionKey:false})

const Register_model = model("RegisterUser",Register_Schema);

module.exports = {
    Register_model
} 