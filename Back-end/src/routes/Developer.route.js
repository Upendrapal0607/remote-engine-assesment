const {Router} = require("express");
const bcrypt = require("bcrypt");
const { DeveloperModel } = require("../models/developer.model");
const DeveloperRoute = Router()

DeveloperRoute.get("/",async(req,res)=>{

})
DeveloperRoute.post("/register",async(req,res)=>{
   const resUser= req.body
  
   try {
    const AlraidyExitstDeveloper= await DeveloperModel.findOne({email:resUser.email})
    if(AlraidyExitstDeveloper){
        res.status(200).json({message:`user whose email ${resUser.email} is alraiday resistered`})
    }
    else{
    bcrypt.hash(resUser.password,5,async(err,hash)=>{
        if(err) res.status(404).send({message:err})
        const registerUser=new DeveloperModel({...resUser,password:hash})
        await registerUser.save()
        res.status(200).send({message:`Your Registation successful`})

    })
  }   
    } catch (error) {
        res.status(200).json({message:error})
    }

})

// userRoute.post("/login",async(req,res)=>{
//     const { email, password } = req.body;
//     try {
//       const user = await DeveloperModel.findOne({ email});
//       if (user) {
//         bcrypt.compare(password, user.password, (err, result) => {
//           if (result) {
//             const token = jwt.sign(
//               { userID: user._id, user: user.name },
//               "masai",
//             );
//             // console.log({token});
//             res.status(200).send({ message:"login successful",token,user,login_role:"user"});
//           } else {
//             res.status(200).send({ message: "wrong password or email" });
//           }
//         });
//       } else {
//         res.status(200).send({ message: "please provid email and password" });
//       }
//     } catch (error) {
//       res.status(200).send({ message: error });
//     }
// })


module.exports={
    DeveloperRoute
}