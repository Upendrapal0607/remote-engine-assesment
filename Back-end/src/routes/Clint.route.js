const {Router} = require("express");
const { ClintModel } = require("../models/clint.model");

const ClintRoute = Router()

ClintRoute.get("/",async(req,res)=>{
 let AllUser = await ClintModel.find()
 res.send({AllUser})
})

module.exports={
    ClintRoute
}