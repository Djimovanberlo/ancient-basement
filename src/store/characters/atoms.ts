import { atom } from 'recoil'

import { goblin } from 'data/enemies'
import { Battleground } from 'interfaces/game/combat'
import { chad, eugene, irene, olive } from 'data/heroes'

const CHARACTERS_KEY = 'characters'

export const charactersState = atom<Battleground>({
  key: CHARACTERS_KEY,
  default: {
    heroes: [irene, chad, olive, eugene],
    enemies: [goblin],
  },
})
