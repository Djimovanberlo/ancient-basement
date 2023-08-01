import React from 'react'

import { ActiveGameProps } from 'interfaces/pages/active'
import { GameState } from 'interfaces/game/game'

const Victory: React.FC<ActiveGameProps> = ({ updateGameState }) => {
  return <div onClick={() => updateGameState(GameState.COMBAT)}>Victory</div>
}

export default Victory
