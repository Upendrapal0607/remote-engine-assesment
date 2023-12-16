
import React, { useState } from 'react'
import styled from 'styled-components';

export const Onboarding = () => {
    const [name,setName] = useState("")
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('client');
  
    const handleLogin = () => {
     const loginData ={
        email,password,role
     }
     console.log(loginData);
     setEmail("")
     setPassword("")
     setRole("")
    };
  
  return (
  
    <DIV>
        <div className='message'>
            <h1>This is developer on board</h1>
        </div>
        <div className="login-container">
      <form className="login-form" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
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
.message{

    margin-top: 2rem;
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