import { atom } from 'recoil'

import { Enemy } from 'interfaces/game/enemy'

export const ENEMIES_KEY = 'enemies'

export const globalInventoryState = atom<Enemy[]>({
  key: ENEMIES_KEY,
  default: [],
})
