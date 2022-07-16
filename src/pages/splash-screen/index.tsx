import React from 'react'
import ButtonComponent from '../../components/button'

const SplashScreen = () => {
  return (
    <div className='splashScreen'>
      <div className='splashScreen__buttonWrapper'>
        <ButtonComponent>Continue</ButtonComponent>
        <ButtonComponent>New Game</ButtonComponent>
        <ButtonComponent>Rules</ButtonComponent>
      </div>
    </div>
  )
}

export default SplashScreen
