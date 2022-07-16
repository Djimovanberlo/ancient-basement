import { useState, useEffect } from 'react'

import { ScreenOrientation } from '../../interfaces/utils'

const getOrientation = () => window.screen.orientation.type

const useScreenOrientation = () => {
  const [orientation, setOrientation] = useState<ScreenOrientation>(ScreenOrientation.LANDSCAPE)

  const updateOrientation = () => {
    const orientation = getOrientation() as ScreenOrientation
    setOrientation(orientation)
  }

  useEffect(() => {
    window.addEventListener('orientationchange', updateOrientation)
    return () => {
      window.removeEventListener('orientationchange', updateOrientation)
    }
  }, [])

  return orientation
}

export default useScreenOrientation
