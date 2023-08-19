import { CharacterActionActors } from './character-actions'

export enum AbilityName {
  FIREBALL = 'fireball',
}

export interface Ability {
  executeAbility: (characterActionActors: CharacterActionActors) => CharacterActionActors
}
