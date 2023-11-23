import { GameState } from 'interfaces/game/game'

interface Props {
  updateGameState: (newGameState: GameState) => void
}

const Victory = ({ updateGameState }: Props) => {
  return <div onClick={() => updateGameState(GameState.COMBAT)}>Victory</div>
}

export default Victory
