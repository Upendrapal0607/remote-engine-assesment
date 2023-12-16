import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../Pages/HomePage'
import { Register } from '../Pages/Register'
import { Onboarding } from '../Pages/Onboarding'
import { Login } from '../Componants/Login'

export const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/onboarding' element={<Onboarding />}/>
            <Route path='/login' element={<Login />}/>
            
        </Routes>
    </div>
  )
}
