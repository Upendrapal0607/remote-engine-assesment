const mongoose = require("mongoose");
const SkillsSchema = mongoose.Schema({
  name: String,
});

const SkillsModel = mongoose.model("skills", SkillsSchema);


const DeveloperSchema = mongoose.Schema({
  First_Name: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Phone_Number: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  skills: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "skills"
  }],
  Professional_Experience: [
    {
      Company_Name: { type: String, required: true },
      Tech_Stack: { type: [String], default: [] },
      Skills_Used: { type: String },
      Time_Period: { type: String, default: "", required: true },
    },
  ],
  Educational_Experience: [
    {
      Degree_Name: { type: String, required: true },
      School_Name: { type: String, required: true },
      Time_Period: {
        start_date: String,
        end_date: String,
      },
    },
  ],
});

const DeveloperModel = mongoose.model("/DeveloperData", DeveloperSchema);
module.exports = {
  SkillsModel,
  DeveloperModel
};
