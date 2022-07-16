import React from 'react'

import Button from '../../components/button'
import useSplashScreen from '../../lib/hooks/useSplashScreen'

const SplashScreen = () => {
  const { navigateToActive } = useSplashScreen()

  return (
    <div className='splashScreen'>
      <div className='splashScreen__buttonWrapper'>
        <Button onClick={navigateToActive}>Continue</Button>
        <Button>New Game</Button>
        <Button>Rules</Button>
      </div>
    </div>
  )
}

export default SplashScreen
