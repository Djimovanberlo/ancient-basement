import { selector } from 'recoil'
import roundState from './atoms'

export const SELECT_ACTIVE_TURN_KEY = 'selectActiveTurn'

const selectActiveTurn = selector({
  key: SELECT_ACTIVE_TURN_KEY,
  get: ({ get }) => {
    const round = get(roundState)
    return round.turnOrder?.[0]
  },
})

export default selectActiveTurn
