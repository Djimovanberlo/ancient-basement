import { atom } from 'recoil'

import { Enemy } from 'interfaces/game/enemy'

export const ENEMIES_KEY = 'enemies'

export const EnemiesState = atom<Enemy[]>({
  key: ENEMIES_KEY,
  default: [],
})
