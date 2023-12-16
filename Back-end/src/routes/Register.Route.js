const {Router} = require("express");
const bcrypt = require("bcrypt");
const { Register_model } = require("../models/Register.model");
const jwt = require("jsonwebtoken")
require("dotenv").config()
const RegisterRout = Router()

RegisterRout.get("/",async(req,res)=>{
try {
    const AllUser = await Register_model.find();
    res.status(200).json({AllUser})
} catch (error) {
    res.status(404).json({message:error})
}
})
RegisterRout.post("/register",async(req,res)=>{
   const resUser= req.body
  console.log({resUser});
   try {
    const AlraidyExitstUser= await Register_model.findOne({email:resUser.email,role:resUser.role})
    if(AlraidyExitstUser){
        res.status(200).json({message:`user whose email ${resUser.email} & role ${resUser.role} is alraiday resistered`})
    }
    else{
    bcrypt.hash(resUser.password,5,async(err,hash)=>{
        if(err) res.status(404).send({message:err})
        const registerUser=new Register_model({...resUser,password:hash})
        await registerUser.save()
        res.status(200).send({message:`Your Registation successful`,resUser})

    })
  }   
    } catch (error) {
        res.status(200).json({message:error})
    }

})

RegisterRout.post("/login",async(req,res)=>{
    const { email, password,role } = req.body;
    try {
      const user = await Register_model.findOne({email,role});
      if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
          if (result) {
            const token = jwt.sign(
              { userID: user._id, user: user.name },
              process.env.SECREAT_TOKEN,
            );
            console.log({token});
            res.status(200).json({ message:"login successful",token,user,name:user.name});
          } else {
            res.status(200).json({ message: "wrong password or email" });
          }
        });
      } else {
        res.status(200).json({ message: "please provid currect email and password" });
      }
    } catch (error) {
      res.status(404).json({ message: error });
    }
})


module.exports={
    RegisterRout
}