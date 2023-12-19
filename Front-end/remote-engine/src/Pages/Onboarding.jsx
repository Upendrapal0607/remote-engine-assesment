// useful inport

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { AddDeveloper, GetAllDeveloper } from "../Redux/OnboardingReducer/Type";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { skills_api } from "../Service/api";
import { getALLSkills } from "../Redux/SkillsReducer/Action";

//  initial developer state position
const IntireDeveloperData = {
  first_name: "",
  last_name: "",
  phone_number: "",
  email: "",
  skills: [],
  professional_experience: [],
  educational_experience: [],
};

// onboard functional componant

export const Onboarding = () => {
  // useful variables and states
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const skillsData = useSelector(store=>store.skillsReducer.skills)
  const allSkillsObj = useSelector(store=>store.skillsReducer)
// console.log({allSkillsObj});
  useEffect(()=>{
   axios.get(skills_api).then(res=>{
    console.log({res});
    dispatch(getALLSkills()).then(res=>{
      console.log({skissData:res});
    })
   })
  },[])
  
  let [sowSkills,setSowSkills] = useState([])
  let [sowProfessionalSkills,setSowProfessionSkills] = useState([])

  const [developerData, setDeveloperData] = useState(IntireDeveloperData);
  const [basicDetails, setBasicDetails] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    skills: [],
  });

// console.log({basicDetails});
  const [professionalExperience, setProfessionalExperience] = useState({
    company_name: "",
    tech_stack: "",
    skills_used: [],
    time_period: 0,
  });
  // console.log({ professionalExperience });
  const [personalExperience, setPersonalExperience] = useState({
    degree_name: "",
    school_name: "",
    time_period: 0,
  });

  const [newSkill, setNewSkill] = useState("");

  const [checkSkill, setCheckSkill] = useState(false);


  //  add more skills function  in skills array

  const handleClick = (e, index,el) => {
   if(basicDetails?.skills.includes(el._id)){
     alert("this is already added")
   }else{
     setBasicDetails((prev) => ({ ...prev, skills: [...prev.skills, el._id] }));
     setSowSkills(prev=>[...prev,el])

   }
  };

  // add skills in basic details state

  const handlAddClick = () => {
    if (checkSkill) {
      if (newSkill) {
       
        setNewSkill("");
        setCheckSkill(!checkSkill);
      }
    } else {
      setCheckSkill(!checkSkill);
    }
  };

  // this fuction use for adding used skills in company

  const handleAddusedSkills = (index,el) => {
    if(professionalExperience?.skills_used.includes(el._id)){
      alert("this is already added")
    }else{
      setProfessionalExperience((prev) => ({
        ...prev,
        skills_used: [...prev.skills_used, el._id],
      }));
      setSowProfessionSkills([...sowProfessionalSkills,el])
    }
  };

  // making professional experience data on the professional experience state in the form of Object

  const handleAddExperience = () => {
    const { company_name, time_period, tech_stack, skills_used } =
      professionalExperience;
    if (company_name && time_period && tech_stack && skills_used) {
      setDeveloperData((prev) => ({
        ...prev,
        professional_experience: [
          ...prev.professional_experience,
          professionalExperience,
        ],
      }));

      setProfessionalExperience({
        company_name: "",
        time_period: 0,
        tech_stack: "",
        skills_used: [],
      });
    }
  };

  // making educational experience data on the educational experience state in the form of Object

  const handleAddDegree = () => {
    const { degree_name, school_name, time_period } = personalExperience;
    if (degree_name && time_period && school_name) {
      setDeveloperData((prev) => ({
        ...prev,
        educational_experience: [
          ...prev.educational_experience,
          personalExperience,
        ],
      }));
      setPersonalExperience({
        degree_name: "",
        time_period: 0,
        school_name: "",
      });
    }
  };

  // this is use for send the developer intire data in the backend
  //  where postDeveloper object in the form of stage to send data in the backend on login click
  const handleLogin = () => {
    let postDeveloperData = {
      ...developerData,
      first_name: basicDetails.first_name,
      email: basicDetails.email,
      last_name: basicDetails.last_name,
      phone_number: basicDetails.phone_number,
      skills: basicDetails.skills,
    };
    console.log({postDeveloperData});
    dispatch(AddDeveloper(postDeveloperData)).then((res) => {
      if (
        res.message ==
        "your details has been accepted we will get back to you soon"
      ) {
        alert(res.message);
        setDeveloperData(IntireDeveloperData);
        navigate("/");
      } 
      else if (
        res.message ==
        `user whose email ${postDeveloperData.email} is alraiday resistered`
      ) {
        alert(res.message);
      }
    });
  };

  const handleSowSkills=(index)=>{
    let temparray = [...sowSkills]
    let tempIdArr = [...basicDetails?.skills]
    temparray.splice(1,index);
    tempIdArr.splice(1,index);
    setSowSkills(temparray)
    setBasicDetails(prev=>({...prev,skills:tempIdArr}))
  }
  const deleteProfesionalSkills=(index)=>{
    let tempProfessionalSkills = [...sowProfessionalSkills]
    let tempIdprofessionalSkillls = [...professionalExperience?.skills_used]
    tempProfessionalSkills.splice(1,index);
    tempIdprofessionalSkillls.splice(1,index);
    setSowProfessionSkills(tempProfessionalSkills)
    setProfessionalExperience(prev=>({...prev,skills_used:tempIdprofessionalSkillls}))
  }

  return (
    <DIV>
      <div className="message">
        <h1>This is developer on board</h1>
      </div>
      <div className="login-container">
        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div className="input-box">
            <label>First Name:</label>
            <input
              value={basicDetails.first_name}
              onChange={(e) =>
                setBasicDetails((prev) => ({
                  ...prev,
                  first_name: e.target.value,
                }))
              }
              type="text"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="input-box">
            <label>Last Name:</label>
            <input
              type="text"
              value={basicDetails.last_name}
              onChange={(e) =>
                setBasicDetails((prev) => ({
                  ...prev,
                  last_name: e.target.value,
                }))
              }
              placeholder="Enter your last name"
              required
            />
          </div>
          <div className="input-box">
            <label>Email:</label>
            <input
              type="email"
              value={basicDetails.email}
              onChange={(e) =>
                setBasicDetails((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Enter you same email"
              required
            />
          </div>
          <div className="input-box">
            <label>Phone number:</label>
            <input
              type="text"
              value={basicDetails.phone_number}
              onChange={(e) =>
                setBasicDetails((prev) => ({
                  ...prev,
                  phone_number: e.target.value,
                }))
              }
              placeholder="Enter you contact number"
              required
            />
          </div>
          <div>Add your Skills</div>
          <div className="skills-main">
            {skillsData?.map((el, index) => (
              <button
                key={index}
                value={el.name}
                onClick={(e) => handleClick(e, index,el)}
              >
                {el.name}
              </button>
            ))}
          </div>
          <div className="add-main">
            {checkSkill && (
              <input
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                type="text"
                className="add-input"
                placeholder="Add your new skill"
              />
            )}
            <button onClick={handlAddClick} className="add-btn">
              ADD
            </button>
          </div>
          <h1>your added skills sow below</h1>
          <div className="skills-main">
            {sowSkills?.map((el,index) => (
              <button
              onClick={()=>handleSowSkills(index)}
              >
                {el.name}
              </button>
            ))}
          </div>
 <   div>
 
 </div>
          <div>
            <h3>Professional Experience</h3>
          </div>
          <div className="input-box">
            <label>Company Name:</label>
            <input
              value={professionalExperience.company_name}
              onChange={(e) =>
                setProfessionalExperience((prev) => ({
                  ...prev,
                  company_name: e.target.value,
                }))
              }
              type="text"
              placeholder="Add company name"
            />
          </div>
          <div className="input-box">
            <label>Tech Stack:</label>
            <input
              value={professionalExperience.tech_stack}
              onChange={(e) =>
                setProfessionalExperience((prev) => ({
                  ...prev,
                  tech_stack: e.target.value,
                }))
              }
              type="text"
              placeholder="Add your core teck Stack"
            />
          </div>
        
            <div>Add your used Skills</div>
          <div className="skills-main">
            {skillsData?.map((el, index) => (
              <button
                key={index}
                value={el.name}
                onClick={(e) => handleAddusedSkills(index,el)}
              >
                {el.name}
              </button>
            ))}
            
          </div>

          <h2>your added used skills sow below</h2>
          <div className="skills-main">
            {sowProfessionalSkills?.map((el, index) => (
              <button
                key={index}
                value={el.name}
                onClick={(e) => deleteProfesionalSkills(index)}
              >
                {el.name}
              </button>
            ))}
            
          </div>

         

          <div className="input-box">
            <label>Time Period in year:</label>
            <select
              value={professionalExperience.time_period}
              onChange={(e) =>
                setProfessionalExperience((prev) => ({
                  ...prev,
                  time_period: +e.target.value,
                }))
              }
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="4">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="11">{"10+"}</option>
            </select>
          </div>
          <button onClick={handleAddExperience} className="submit-btn">
            Add new Professional Experience
          </button>
          <div>
            <h3>Educational Experience</h3>
          </div>
          <div className="input-box">
            <label>Degree Name:</label>
            <input
              onChange={(e) =>
                setPersonalExperience((prev) => ({
                  ...prev,
                  degree_name: e.target.value,
                }))
              }
              value={personalExperience.degree_name}
              type="text"
              placeholder="Add your degree name"
            />
          </div>
          <div className="input-box">
            <label>School Name:</label>
            <input
              onChange={(e) =>
                setPersonalExperience((prev) => ({
                  ...prev,
                  school_name: e.target.value,
                }))
              }
              value={personalExperience.school_name}
              type="text"
              placeholder="Add school name"
            />
          </div>
          <div className="input-box">
            <label> Degree Time Period in year:</label>
            <select
              value={personalExperience.time_period}
              onChange={(e) =>
                setPersonalExperience((prev) => ({
                  ...prev,
                  time_period: +e.target.value,
                }))
              }
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <button onClick={handleAddDegree} className="submit-btn">
            Add new Professional Experience
          </button>

          <button
            style={{ margin: "1rem" }}
            className="submit-btn"
            type="submit"
          >
            Apply
          </button>
        </form>
      </div>
    </DIV>
  );
};
const DIV = styled.div`
  /* basic css using styled componants*/
  .message {
    margin-top: 2rem;
  }
  .input-box {
    display: flex;
    justify-content: center;
    gap: 1rem;
    text-align: center;
  }
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    width: 100%;
  }

  label {
    margin-top: 0.5rem;
  }
  .skills-main {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    margin: 1rem 0rem;
  }
  .skills-main > button {
    padding: 4px;
    border-radius: 4px;
    background-color: #6793b8;
  }
  input,
  select {
    margin-bottom: 1rem;
    padding: 0.5rem;
  }

  .submit-btn {
    background-color: #61dafb;
    color: white;
    padding: 0.5rem;
    cursor: pointer;
  }

  .submit-btn:hover,
  .add-btn:hover {
    background-color: #0e70c7;
  }
  .add-btn {
    background-color: #61dafb;
    color: white;
    padding: 0.5rem;
    cursor: pointer;
    margin-left: 1rem;
  }
  button{
    cursor: pointer;
  }
`;
