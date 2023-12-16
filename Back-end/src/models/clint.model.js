const mongoose = require("mongoose");

const ClintSchema = mongoose.Schema({
    Company_Name: String,
    Role:String,
     Sallary:String,
     Require_Skills:{
       type:[String],
      default:[]
     }
});
const ClintModel = mongoose.model("/clintData", ClintSchema);
module.exports={
    ClintModel
}