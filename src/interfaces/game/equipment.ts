import { SkillType, ElementName } from 'interfaces/game/elements'
import { AbilityName } from 'interfaces/game/ability'

export enum WeaponName {
  SHORT_SWORD = 'Short Sword',
}

export enum HelmetName {
  STEEL_HELMET = 'Steel Helmet',
}

export enum ArmorName {
  LEATHER_ARMOR = 'Leather Armor',
}

export enum AccessoryName {
  RUBY_RING = 'Ruby Ring',
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

export interface Weapon extends Equipment {
  attackType: SkillType
  element: ElementName
  power: number
  randomModifier?: number
}

export interface Accessory extends Equipment {
  ability: AbilityName
}
