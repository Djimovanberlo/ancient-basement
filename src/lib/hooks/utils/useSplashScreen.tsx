import { MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useSplashScreen = () => {
  const navigate = useNavigate()
  const [isNewGameOpen, setIsNewGameOpen] = useState<boolean>(false)
  const [isRulesOpen, setisRulesOpen] = useState<boolean>(false)

  const navigateToActive = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    navigate('/active')
  }

  const turnOffRulesOpen = () => setisRulesOpen(false)
  const toggleNewGameOpen = () => setIsNewGameOpen(!isNewGameOpen)
  const toggleRulesOpen = () => setisRulesOpen(!isRulesOpen)

  return { navigateToActive, isNewGameOpen, toggleNewGameOpen, isRulesOpen, toggleRulesOpen, turnOffRulesOpen }
}

export default useSplashScreen
