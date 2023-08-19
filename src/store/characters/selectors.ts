import { selector } from 'recoil'
import { charactersState } from './atoms'

const SELECT_ALL_CHARACTERS_KEY = 'selectAllCharacters'

export const selectAllCharacters = selector({
  key: SELECT_ALL_CHARACTERS_KEY,
  get: ({ get }) => get(charactersState),
  set: ({ set, get }, newValue) => {
    const { enemies } = get(charactersState)
    set(charactersState, newValue)
  },
})
