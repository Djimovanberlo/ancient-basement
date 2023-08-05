import { Enemy } from './enemy'
import { Hero } from './hero'

export interface Round {
  turnOrder: (Hero | Enemy)[]
  turnIndex: number
}
