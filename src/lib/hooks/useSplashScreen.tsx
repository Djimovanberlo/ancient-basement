import { useNavigate } from 'react-router-dom'

const useSplashScreen = () => {
  const navigate = useNavigate()

  const navigateToActive = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    navigate('/active')
  }

  return { navigateToActive }
}

export default useSplashScreen
