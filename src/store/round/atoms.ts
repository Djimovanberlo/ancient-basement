import { atom } from 'recoil'

import { Round } from 'interfaces/game/round'
import { initialIrene } from 'store/characters/initial'

export const ROUND_KEY = 'round'

export const roundState = atom<Round>({
  key: ROUND_KEY,
  default: {
    turnOrder: [initialIrene],
    turnIndex: 0,
  },
})
