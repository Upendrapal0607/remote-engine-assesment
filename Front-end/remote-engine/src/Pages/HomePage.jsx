import React from 'react'
import styled from 'styled-components'

export const HomePage = () => {
  return (
    <DIV>
    <div className="home-content">
        <h1>This is Your Job Portal</h1>
        <p>Share job and get job achieve your career goals here.</p>
      </div>
    </DIV>
  )
}

const DIV = styled.div`
    /* Home.css */

.home-content {
  text-align: center;
  margin: 2rem;
}

.home-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.home-content p {
  font-size: 1.2rem;
  color: #555;
}

`