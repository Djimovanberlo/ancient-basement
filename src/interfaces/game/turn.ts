import { HeroActionName } from './character-actions'
import { Ability } from './ability'
import { Item } from './items'

export interface Turn {
  action: HeroActionName | null
  targeting: boolean
  selection: Item | Ability | null
}
