import { useCallback, useState } from 'react'

import { GameState } from 'interfaces/game/game'
import Combat from 'pages/active/combat'
import Victory from './victory'
import Defeat from './defeat'

const Active = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.COMBAT)

  const updateGameState = useCallback((newGameState: GameState) => {
    setGameState(newGameState)
  }, [])

  if (gameState === GameState.COMBAT) return <Combat updateGameState={updateGameState} />
  if (gameState === GameState.VICTORY) return <Victory updateGameState={updateGameState} />
  if (gameState === GameState.DEFEAT) return <Defeat updateGameState={updateGameState} />
  return <></>
}

export default Active
