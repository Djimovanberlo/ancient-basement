import { HeroActionName } from './character-actions'
import { Accessory, Equipment, Weapon } from './equipment'
import { Ability } from './ability'
import { Enemy } from './enemy'
import { Hero } from './hero'
import { Item } from './items'

export interface Turn {
  action: HeroActionName | null
  targeting: boolean
  selection: Item | Ability | null
  targets: (Hero | Enemy)[]
}
