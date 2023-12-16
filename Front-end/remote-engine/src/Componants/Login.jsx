import React, { useState } from 'react'
import styled from 'styled-components';
import { LoginRequest } from '../Redux/UserReducer/Type';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('developer');
    const dispatch = useDispatch()
    const data = useSelector(state=>state.UserReducer)
    console.log({data});
  const navigate = useNavigate()
    const handleLogin = () => {
     const loginData ={
        email,password,role
     }
     dispatch(LoginRequest(loginData)).then(res=>{
      if(res){
        console.log({res});
      alert(`${res.message}`)
      if(res.message=="login successful"){
        navigate("/onboarding")
      }
      }else{
        alert("there is something wrong please try again later")
      }
     })
    //  console.log(loginData);
     setEmail("")
     setPassword("")
     setRole("")
    };
  
  return (
    <DIV>
        <div className="login-container">
      <form className="login-form" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
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
        <button type="submit">Login</button>
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