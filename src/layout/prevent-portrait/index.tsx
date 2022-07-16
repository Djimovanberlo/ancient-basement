import React from 'react'
import { isTablet, isMobile } from 'react-device-detect'

import { ScreenOrientation } from '../../interfaces/utils'
import useScreenOrientation from '../../lib/hooks/useScreenOrientation'

const PreventPortrait = ({ children }: { children: React.ReactNode }) => {
  const screenOrientation = useScreenOrientation()
  const isPortrait = screenOrientation === ScreenOrientation.PORTRAIT
  const isTabletOrMobile = isTablet || isMobile

  if (isPortrait && isTabletOrMobile) return <div>Game only available on landscape</div>
  return <>{children}</>
}

export default PreventPortrait
