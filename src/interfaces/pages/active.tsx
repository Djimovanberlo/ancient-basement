import { GameState } from 'interfaces/game/game'

export interface ActiveGameProps {
  updateGameState: (newGameState: GameState) => void
}
