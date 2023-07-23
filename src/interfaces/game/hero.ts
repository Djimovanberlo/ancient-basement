import { Character } from './character'
import { Accessory, Armor, Weapon } from './equipment'

export enum HeroName {
  IRENE = 'Irene',
  CHAD = 'Chad',
  OLIVE = 'Olive',
  EUGENE = 'Eugene',
}

export interface Hero extends Character {
  name: HeroName
  weapon: Weapon
  head: Armor
  body: Armor
  accessory1: Accessory
  accessory2: Accessory
  accessory3: Accessory
}
