export enum GameState {
  MENU = 'menu',
  COMBAT = 'combat',
  VICTORY = 'victory',
  DEFEAT = 'defeat',
}

export interface Game {
  state: GameState
  level: number
}
