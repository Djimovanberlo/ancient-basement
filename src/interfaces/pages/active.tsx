import { GameState } from '../game'

export interface ActiveGameProps {
  updateGameState: (newGameState: GameState) => void
}
