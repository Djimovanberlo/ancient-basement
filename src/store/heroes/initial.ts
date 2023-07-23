import { createInitHeroInventory } from 'factory/inventory'
import { createInitStats } from 'factory/stats'
import { WeaponName } from 'interfaces/game/equipment'
import { Hero, HeroName } from 'interfaces/game/hero'

export const initialIrene: Hero = {
  name: HeroName.IRENE,
  inventory: createInitHeroInventory({ weapon: WeaponName.SHORT_SWORD }),
  stats: createInitStats({ maxHealth: 100, maxMana: 100 }),
}

export const initialChad: Hero = {
  name: HeroName.IRENE,
  inventory: createInitHeroInventory({ weapon: WeaponName.SHORT_SWORD }),
  stats: createInitStats({ maxHealth: 100, maxMana: 100 }),
}

export const initialOlive: Hero = {
  name: HeroName.IRENE,
  inventory: createInitHeroInventory({ weapon: WeaponName.SHORT_SWORD }),
  stats: createInitStats({ maxHealth: 100, maxMana: 100 }),
}

export const initialEugene: Hero = {
  name: HeroName.IRENE,
  inventory: createInitHeroInventory({ weapon: WeaponName.SHORT_SWORD }),
  stats: createInitStats({ maxHealth: 100, maxMana: 100 }),
}
