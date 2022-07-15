import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Active from './pages/active'
import Splash from './pages/splash'

function App() {
  return (
    <div className='ancientBasement'>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/active' element={<Active />} />
      </Routes>
    </div>
  )
}

export default App
