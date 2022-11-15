const Signup_Model = require("../model/SignupModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const match_login_data = async(req,res)=>{
   try {
    const id = req.params.id
   const login_success = await Signup_Model.find({email:req.body.email})
   if (!login_success) {
     res.status(400).json({message:"Email or Password is Invalid"})  
    }
    const comparedPass = await bcrypt.compare(req.body.password,login_success[0].password)
    console.log(comparedPass);
    if (!comparedPass) {
        res.status(400).json({message:"Email or Password is Invalid"})  
    }
    const accessToken = jwt.sign({id:id},"dfzfdnsdfisfjsdfjksmfkfjfmfbvhdfbfnf",{expiresIn:"7d"})
    console.log("backend login",login_success[0].id);
    console.log("backend login",login_success[0].name);
    const obj = {
      userId:login_success[0].id,
      name:login_success[0].name,
      accessToken:accessToken
    }
    return res.status(200).json({
      status:"success",
      obj
    })

   } catch (error) {
      res.status(500).json({message:error.message});
   }
}

module.exports = match_login_data;