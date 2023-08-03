import { atom } from 'recoil'

import { Turn } from 'interfaces/game/turn'

export const TURN_KEY = 'turn'

export const turnState = atom<Turn>({
  key: TURN_KEY,
  default: {
    state: null,
    selection: null,
    targeting: false,
    targets: [],
  },
})
