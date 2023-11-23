import { GameState } from 'interfaces/game/game'

interface Props {
  updateGameState: (newGameState: GameState) => void
}

const Defeat = ({ updateGameState }: Props) => {
  return <div onClick={() => updateGameState(GameState.COMBAT)}>defeat</div>
}

export default Defeat
