import { atom } from 'recoil'

import { Turn } from 'interfaces/game/turn'

export const TURN_KEY = 'turn'

const turnState = atom<Turn>({
  key: TURN_KEY,
  default: {
    action: null,
    selection: null,
    targeting: false,
  },
})

export default turnState
