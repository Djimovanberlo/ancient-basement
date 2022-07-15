import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Template from './layout/template'
import Active from './pages/active'
import Splash from './pages/splash'

import './styles/globals.css'
import './styles/main.scss'

function App() {
  return (
    <Template>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/active' element={<Active />} />
      </Routes>
    </Template>
  )
}

export default App
