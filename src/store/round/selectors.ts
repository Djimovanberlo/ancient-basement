import { selector } from 'recoil'
import { roundState } from './atoms'
import { Hero } from 'interfaces/game/hero'
import { Enemy } from 'interfaces/game/enemy'

const SELECT_ACTIVE_TURN_KEY = 'selectActiveTurn'

export const selectActiveTurn = selector<Hero | Enemy>({
  key: SELECT_ACTIVE_TURN_KEY,
  get: ({ get }) => {
    const { turnOrder, turnIndex } = get(roundState)
    return turnOrder[turnIndex]
  },
})
