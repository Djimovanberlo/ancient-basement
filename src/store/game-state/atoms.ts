import { atom } from 'recoil'

import { Game, GameState } from 'interfaces/game'

export const GAME_KEY = 'game'

export const gameState = atom<Game>({
  key: GAME_KEY,
  default: {
    state: GameState.MENU,
    level: 1,
  },
})
