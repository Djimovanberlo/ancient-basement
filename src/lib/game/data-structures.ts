import { Character } from 'interfaces/game/character'
import { StatusAndId } from 'interfaces/game/status'

export const extractStatusAndId = (character: Character): StatusAndId => {
  const { id, status } = character
  return { id, status }
}
