import React from 'react'

import { ActiveGameProps } from '../../interfaces/pages/active'
import { GameState } from '../../interfaces/game'

const Combat: React.FC<ActiveGameProps> = ({ updateGameState }) => {
  return (
    <div>
      Combat
      <div onClick={() => updateGameState(GameState.DEFEAT)}>Set defeat</div>
      <div onClick={() => updateGameState(GameState.VICTORY)}>Set victory</div>
    </div>
  )
}

export default Combat
