import { HeroActionName } from './character-actions'
import { Ability } from './ability'
import { Item } from './items'
import { Character } from './character'

export interface Turn {
  action: HeroActionName | null
  targeting: boolean
  selection: Item | Ability | null
  targets: Character[]
}
