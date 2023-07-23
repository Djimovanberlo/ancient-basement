import { AttackType } from 'interfaces/game/elements'
import { AbilityNames } from './ability'

export interface Equipment {
  maxHealth?: number
  maxMana?: number
  strength?: number
  defense?: number
  intelligence?: number
  resistance?: number
  agility?: number
}

export type Armor = Equipment

export interface Weapon extends Equipment {
  attackType: AttackType
  power: number
  randomModifier?: number
}

export interface Accessory extends Equipment {
  ability: AbilityNames
}
