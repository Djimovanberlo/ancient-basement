import { atom } from 'recoil'

import { Turn } from 'interfaces/game/turn'

export const TURN_KEY = 'turn'

export const turnState = atom<Turn>({
  key: TURN_KEY,
  default: {
    attack: { isSelected: false },
    defend: { isSelected: false },
    ability: { isSelected: false },
    item: { isSelected: false },
    inventory: { isSelected: false },
  },
})
