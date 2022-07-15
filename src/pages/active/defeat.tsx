import React from 'react'

import { GameState } from '../../interfaces/game'
import { ActiveGameProps } from '../../interfaces/pages/active'

const Defeat: React.FC<ActiveGameProps> = ({ updateGameState }) => {
  return <div onClick={() => updateGameState(GameState.COMBAT)}>defeat</div>
}

export default Defeat
