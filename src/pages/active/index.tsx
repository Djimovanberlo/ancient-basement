import { lazy, memo, useCallback, useState } from 'react'

import { GameState } from 'interfaces/game/game'

const Combat = lazy(() => import('pages/active/combat'))
const Victory = lazy(() => import('pages/active/victory'))
const Defeat = lazy(() => import('pages/active/defeat'))

const Active = memo(() => {
  const [gameState, setGameState] = useState<GameState>(GameState.COMBAT)

  const updateGameState = useCallback((newGameState: GameState) => {
    setGameState(newGameState)
  }, [])

  if (gameState === GameState.COMBAT) return <Combat updateGameState={updateGameState} />
  if (gameState === GameState.VICTORY) return <Victory updateGameState={updateGameState} />
  if (gameState === GameState.DEFEAT) return <Defeat updateGameState={updateGameState} />
  return <></>
})

export default Active
