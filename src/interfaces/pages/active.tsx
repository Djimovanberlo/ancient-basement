import { GameState } from 'interfaces/game'

export interface ActiveGameProps {
  updateGameState: (newGameState: GameState) => void
}
