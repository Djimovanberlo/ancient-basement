import { HeroInventory } from 'interfaces/game/hero'

export const createInitHeroInventory = (partialInventory: Partial<HeroInventory>): HeroInventory => {
  return {
    weapon: null,
    head: null,
    body: null,
    accessory1: null,
    accessory2: null,
    accessory3: null,
    ...partialInventory,
  }
}
