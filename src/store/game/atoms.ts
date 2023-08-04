import { atom } from 'recoil'

import { Game, GameState } from 'interfaces/game/game'

const GAME_KEY = 'game'

export const gameState = atom<Game>({
  key: GAME_KEY,
  default: {
    state: GameState.MENU,
    basementFloor: 1,
  },
})
