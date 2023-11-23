import { atom } from 'recoil'

import { Round } from 'interfaces/game/round'

export const ROUND_KEY = 'round'

const roundState = atom<Round>({
  key: ROUND_KEY,
  default: {
    turnOrder: [],
  },
})

export default roundState
