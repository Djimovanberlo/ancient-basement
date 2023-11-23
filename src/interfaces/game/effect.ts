import { CharacterActionActors } from 'interfaces/game/character-actions'

export type Effect = (characterActionActors: CharacterActionActors) => CharacterActionActors
