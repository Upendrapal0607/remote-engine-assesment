const mongoose = require("mongoose");

// skills schema
const SkillsSchema = mongoose.Schema(
  {
    name: String,
  },
  { versionKey: false }
);

// skills model
const SkillsModel = mongoose.model("skills", SkillsSchema);



// developer (Onboarding) schema

const DeveloperSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, 
    },
    skills: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "skills",
      require:true
    }],
    professional_experience: [
      {
        company_name: { type: String },
        tech_stack: String,
        skills_used: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: "skills",
        }],
        time_period: { type: Number, default: 0 },
      },
    ],
    educational_experience: [
      {
        degree_name: { type: String },
        school_name: { type: String ,require:true},
        time_period: { type: Number, default: 0,require:true },
      },
    ],
  },
  { versionKey: false }
);

// developer (Onboarding) model

const DeveloperModel = mongoose.model("DeveloperData", DeveloperSchema);
module.exports = {
  SkillsModel,
  DeveloperModel,
};
