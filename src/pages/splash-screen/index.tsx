import useSplashScreen from '@/lib/hooks/useSplashScreen'
// import Button from '@/components/button'
import NewGameModal from 'Components/modal/new-game-modal'
import RulesModal from '@/components/modal/rules-modal'

const SplashScreen = () => {
  const { navigateToActive, isNewGameOpen, toggleNewGameOpen, isRulesOpen, toggleRulesOpen } = useSplashScreen()

  return (
    <div className={`splashScreen ${isNewGameOpen || isRulesOpen ? 'splashScreen--darken' : ''}`}>
      {isNewGameOpen && <NewGameModal toggleModal={toggleNewGameOpen} isOpen={isNewGameOpen} />}
      {isRulesOpen && <RulesModal toggleModal={toggleRulesOpen} isOpen={isRulesOpen} />}
      <div className='splashScreen__buttonWrapper'>
        <Button onClick={navigateToActive}>Continue</Button>
        <Button onClick={toggleNewGameOpen}>New Game</Button>
        <Button onClick={toggleRulesOpen}>Rules</Button>
      </div>
    </div>
  )
}

export default SplashScreen
