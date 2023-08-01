import React from 'react'

import { ActiveGameProps } from 'interfaces/pages/active'
import { GameState } from 'interfaces/game/game'

const Defeat: React.FC<ActiveGameProps> = ({ updateGameState }) => {
  return <div onClick={() => updateGameState(GameState.COMBAT)}>defeat</div>
}

export default Defeat
