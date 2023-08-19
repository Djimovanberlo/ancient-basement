import { Enemy } from './enemy'
import { Hero } from './hero'

export type Character = Hero | Enemy

export interface Characters {
  heroes: Hero[]
  enemies: Enemy[]
}
