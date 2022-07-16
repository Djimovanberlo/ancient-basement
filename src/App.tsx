import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Template from './layout/template'
import Grid from './layout/grid'
import Active from './pages/active'
import Splash from './pages/splash'

import './styles/globals.css'
import './styles/main.scss'
import PreventPortrait from './layout/prevent-portrait'

function App() {
  return (
    <div className='ancient-basement'>
      <PreventPortrait>
        <Template>
          <Grid>
            <Routes>
              <Route path='/' element={<Splash />} />
              <Route path='/active' element={<Active />} />
            </Routes>
          </Grid>
        </Template>
      </PreventPortrait>
    </div>
  )
}

export default App

// GameProvider
// Store
// Template
//
// Routes
