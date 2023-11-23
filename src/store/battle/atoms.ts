import { atom } from 'recoil'

import { goblin } from 'data/enemies'
import { Battle } from 'interfaces/game/battle'
import { chad, eugene, irene, olive } from 'data/heroes'

const BATTLE = 'battle'

const battleState = atom<Battle>({
  key: BATTLE,
  default: {
    heroes: [irene, chad, olive, eugene],
    enemies: [goblin],
  },
})

export default battleState
