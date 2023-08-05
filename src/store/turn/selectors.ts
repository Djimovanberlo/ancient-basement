import { HeroActionName } from 'interfaces/game/character-actions'
import { selector } from 'recoil'
import { turnState } from './atoms'

const SELECT_TURN_ACTION_KEY = 'selectTurnAction'

const SET_TURN_TARGETING = 'setTurnTargeting'

export const selectTurnAction = selector<HeroActionName | null>({
  key: SELECT_TURN_ACTION_KEY,
  get: ({ get }) => {
    const { action } = get(turnState)
    return action
  },
})

// export const setTurnTargeting = selector<boolean>({
//   key: SET_TURN_TARGETING,
//   set: ({ get, set }, targeting) => {
//     set(turnState, turn => ({
//       ...turn,
//       targeting,
//     }))
//   },
// })
