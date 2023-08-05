import { atom } from 'recoil'

import { Round } from 'interfaces/game/round'

export const ROUND_KEY = 'round'

export const roundState = atom<Round>({
  key: ROUND_KEY,
  default: {
    turnOrder: [],
    turnIndex: 0,
  },
})
