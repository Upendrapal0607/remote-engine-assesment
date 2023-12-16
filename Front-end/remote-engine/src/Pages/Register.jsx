import React, { useState } from 'react'
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux"
import { RgisterRequest } from '../Redux/UserReducer/Type';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const [name,setName] = useState("upendra")
    const [email, setEmail] = useState('pal@gmail.com');
    const [password, setPassword] = useState('123');
    const [role, setRole] = useState('developer');
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
  // console.log((dispatch));
    const handleRegister = () => {
     const userData ={
        name,email,password,role
     }
     dispatch(RgisterRequest(userData)).then(res=>{
      if(res){
      alert(`${res.message}`)
      if(res.message=="Your Registation successful"){
        navigate("/login")
      }
      }else{
        alert("there is something wrong please try again later")
      }
     })
     console.log(userData);
     
     setName("")
     setEmail("")
     setPassword("")
     setRole("")
    };
  
  return (
    <DIV>
        <div className="login-container">
      <form className="login-form" onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>email:</label>
        <input
          type="Email"
          placeholder="Enter your email "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>Role:</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="client">Client</option>
          <option value="developer">Developer</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
    </DIV>
  )
}
const DIV = styled.div`
    /* Login.css */

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
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

input,
select {
  margin-bottom: 1rem;
  padding: 0.5rem;
}

button {
  background-color: #61dafb;
  color: white;
  padding: 0.5rem;
  cursor: pointer;
}

button:hover {
  background-color: #0e70c7;
}

`