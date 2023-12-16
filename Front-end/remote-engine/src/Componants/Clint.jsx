import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { GetAllDeveloper } from '../Redux/OnboardingReducer/Type'

export const Clint = () => {
const dispatch = useDispatch()
    const handleFetchData = () => {
        dispatch(GetAllDeveloper()).then((res) => {
            console.log({ developer: res });
          });
    }
  return (
    <DIV>
    <div style={{textAlign:"center"}}>
        <h1>This is clint page clint can fetch all the data from backend here </h1>
        <h4>just click below button and watch in console</h4>
        <button onClick={handleFetchData}>
            Fetch developer data
        </button>
    </div>
    </DIV>
  )
}

const DIV = styled.div`
   button {
  background-color: #61dafb;
  color: white;
  padding: 0.5rem;
  cursor: pointer;
  border: none;
  border-radius: 4px;
}

button:hover {
  background-color: #0e70c7;
}

`