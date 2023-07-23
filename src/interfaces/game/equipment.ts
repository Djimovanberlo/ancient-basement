import { AttackType } from 'interfaces/game/elements'
import { AbilityName } from './ability'

export enum WeaponName {
  SHORT_SWORD = 'Short Sword',
}

export enum HelmetName {
  SHORT_SWORD = 'Short Sword',
}

export enum ArmorName {
  SHORT_SWORD = 'Short Sword',
}

export enum AccessoryName {
  SHORT_SWORD = 'Short Sword',
}

export interface Equipment {
  maxHealth?: number
  maxMana?: number
  StatName?: number
  defense?: number
  intelligence?: number
  resistance?: number
  agility?: number
}

export type Gear = Equipment

export interface Weapon extends Equipment {
  attackType: AttackType
  power: number
  randomModifier?: number
}

export interface Accessory extends Equipment {
  ability: AbilityName
}
