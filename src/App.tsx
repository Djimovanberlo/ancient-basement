import { Route, Routes } from 'react-router-dom'

import Template from './layout/template'
import Active from './pages/active'
import Splash from './pages/splash-screen'

import './styles/globals.css'
import './styles/main.scss'
import PreventPortrait from './layout/prevent-portrait'

function App() {
  return (
    <div className='ancient-basement'>
      <PreventPortrait>
        <Template>
          <Routes>
            <Route path='/' element={<Splash />} />
            <Route path='/active' element={<Active />} />
          </Routes>
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
