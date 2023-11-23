import { atom } from 'recoil'

import { Game, GameState } from 'interfaces/game/game'

const GAME_KEY = 'game'

const gameState = atom<Game>({
  key: GAME_KEY,
  default: {
    state: GameState.MENU,
    basementFloor: 1,
  },
})

export default gameState
