import { HeroActionName } from 'interfaces/game/character-actions'
import { selector } from 'recoil'
import { turnState } from './atoms'

const SELECT_TURN_ACTION_KEY = 'selectTurnAction'

export const selectTurnAction = selector<HeroActionName | null>({
  key: SELECT_TURN_ACTION_KEY,
  get: ({ get }) => {
    const { action } = get(turnState)
    return action
  },
})
