import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styled from "styled-components"
import { LOGOUT_REQUEST_SUCCESS } from '../Redux/UserReducer/ActionType'
export const NaveBar = () => {
  const navigate = useNavigate()
  const data = useSelector(state=>state.UserReducer)
  const dispatch = useDispatch()
    const handleLogedOut=()=>{
      dispatch({type:LOGOUT_REQUEST_SUCCESS})
      navigate("/")
    }
  return (
    <DIV>
         <div className="logo">YOUR JOB PORTAL</div>
      <ul className="nav-links">

        <li><Link to={"/"}>Home</Link></li>
        {data?.token?<div className='log-out'><Link onClick={handleLogedOut}>{data.userName}</Link></div>:<div className='login-register'>
        <li><Link to={"/login"}>Login</Link></li>
        <li><Link to={"/register"}>Register</Link></li>
        </div>}
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
.login-register,.log-out{
  display: flex; 
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.log-out{
  margin: 0rem 1rem;
}


` 