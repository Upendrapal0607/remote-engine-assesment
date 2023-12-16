import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
export const NaveBar = () => {
  return (
    <DIV>
         <div className="logo">YOUR JOB PORTAL</div>
      <ul className="nav-links">
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/login"}>Login</Link></li>
        <li><Link to={"/register"}>Register</Link></li>
        <li><Link to={"/onboarding"}>On Board</Link></li>
      </ul>
    </DIV>
  )
}

const DIV = styled.nav`

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem;
  color: white;
.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
}

.nav-links li {
  margin-right: 1rem;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
}

.nav-links a:hover {
  color: #61dafb; 
}


` 