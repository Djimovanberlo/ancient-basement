import { Enemy } from './enemy'
import { Hero } from './hero'

export enum CharacterType {
  HERO = 'hero',
  ENEMY = 'enemy',
}

export interface Characters {
  heroes: Hero[]
  enemies: Enemy[]
}
