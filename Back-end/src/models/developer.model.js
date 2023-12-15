const mongoose = require("mongoose");

const DeveloperSchema = mongoose.Schema({});
const DeveloperModel = mongoose.model("/DeveloperData", DeveloperSchema);
module.exports={
    DeveloperModel
}