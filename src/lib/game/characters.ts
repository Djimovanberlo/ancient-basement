import { Character } from 'interfaces/game/character'

export const roundCharacterHealthToZero = (character: Character) => {
  if (character.status.stats.health <= 0) character.status.stats.health = 0
  return { ...character }
}

export const getIsCharacterAlive = (character: Character) => character.status.stats.health > 0

export const getAliveCharacters = (characters: Character[]) => characters.map(roundCharacterHealthToZero).filter(getIsCharacterAlive)

export const findCharacterById = (characters: Character[], id: string | null = '') => characters.find(character => character.id === id)
