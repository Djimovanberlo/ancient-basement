import { Character } from 'interfaces/game/character'

export const createNewRound = (charaters: Character[]) => {
  // TODO replace this with speed calculation to determine turn order
  for (let i = charaters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[charaters[i], charaters[j]] = [charaters[j], charaters[i]]
  }

  return charaters
}
