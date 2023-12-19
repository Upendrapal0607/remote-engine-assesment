import axios from "axios";

const { SKILLS_POST_SUCCESS, SKILLS_REQUEST, SKILLS_REQUEST_SUCCESS, SKILLS_REQUEST_FAIL } = require("./ActionType")
const { skills_api } = require("../../Service/api")

export const getALLSkills = ()=>async dispatch =>{
    try {
        dispatch({type:SKILLS_REQUEST})
    return await axios.get(skills_api).then(res=>{
   console.log({res2:res});
   dispatch({type:SKILLS_REQUEST_SUCCESS,payload:res?.data})
   return res.data
        }).catch(error=>{
            dispatch({type:SKILLS_REQUEST_FAIL})
        })
        
    } catch (error) {
        dispatch({type:SKILLS_REQUEST_FAIL})
    }
   
  };
  


 export const AddnewSkill =payload=>async dispatch=>{
    try {
        dispatch({type:SKILLS_REQUEST})
        return await axios.post(`${skills_api}/add`,payload).then(res=>{
       return res.data
        })
    .catch(error=>{

        dispatch({type:SKILLS_REQUEST_FAIL})
    })
    
    } 
    catch (error) {
        dispatch({type:SKILLS_REQUEST_FAIL})
    
}
}

