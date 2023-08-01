import { Round } from 'interfaces/game/round'
import { atom } from 'recoil'

export const ROUND_KEY = 'round'

export const roundState = atom<Round>({
  key: ROUND_KEY,
  default: {
    turnOrder: [],
    turnIndex: 0,
  },
})
