import { atom } from 'recoil'

import { Characters } from 'interfaces/game/character'
import { goblin } from 'data/enemies'
import { initialChad, initialEugene, initialIrene, initialOlive } from './initial'

const CHARACTERS_KEY = 'characters'

export const charactersState = atom<Characters>({
  key: CHARACTERS_KEY,
  default: {
    heroes: [initialIrene, initialChad, initialOlive, initialEugene],
    enemies: [goblin],
  },
})
