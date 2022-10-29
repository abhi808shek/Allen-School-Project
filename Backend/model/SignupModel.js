const mongoose = require("mongoose");
const emailValidator = require("email-validator");
const bcrypt = require('bcrypt');


const signupForm = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:function () {
            return emailValidator.validate(this.email)
        }
    },
    password:{
        type:String,
        required:true,
    }})

signupForm.pre("save",async function () {
    const salt = await bcrypt.genSalt(10) 
    const hashpass = bcrypt.hash(this.password, salt)
    this.password=hashpass;
})


const Signup_Model = mongoose.model("Signup_Model",signupForm)

module.exports = Signup_Model;