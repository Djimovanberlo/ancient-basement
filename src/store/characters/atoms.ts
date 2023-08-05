import { goblin } from 'data/enemies'
import { Characters } from 'interfaces/game/character'
import { atom } from 'recoil'
import { initialChad, initialEugene, initialIrene, initialOlive } from 'store/heroes/initial'

const CHARACTERS_KEY = 'characters'

export const charactersState = atom<Characters>({
  key: CHARACTERS_KEY,
  default: {
    heroes: { irene: initialIrene, chad: initialChad, olive: initialOlive, eugene: initialEugene },
    enemies: [goblin],
  },
})
