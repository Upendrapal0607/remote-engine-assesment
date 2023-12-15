const mongoose = require("mongoose");

const ClintSchema = mongoose.Schema({});
const ClintModel = mongoose.model("/clintData", ClintSchema);
module.exports={
    ClintModel
}