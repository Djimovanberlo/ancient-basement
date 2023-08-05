import { atom } from 'recoil'

import { Turn } from 'interfaces/game/turn'
import { Goblin } from 'data/enemies'

export const TURN_KEY = 'turn'

export const turnState = atom<Turn>({
  key: TURN_KEY,
  default: {
    action: null,
    selection: null,
    targeting: false,
    targets: [Goblin],
  },
})
