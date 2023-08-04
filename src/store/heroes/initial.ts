import { createInitHeroInventory } from 'factory/inventory'
import { createInitStats } from 'factory/stats'
import { WeaponName } from 'interfaces/game/equipment'
import { Hero, HeroName } from 'interfaces/game/hero'

export const initialIrene: Hero = {
  name: HeroName.IRENE,
  inventory: createInitHeroInventory({ weapon: WeaponName.SHORT_SWORD }),
  stats: createInitStats({ maxHealth: 100, maxMana: 100, health: 100, mana: 100 }),
}

export const initialChad: Hero = {
  name: HeroName.IRENE,
  inventory: createInitHeroInventory({ weapon: WeaponName.SHORT_SWORD }),
  stats: createInitStats({ maxHealth: 100, maxMana: 100, health: 80, mana: 80 }),
}

export const initialOlive: Hero = {
  name: HeroName.IRENE,
  inventory: createInitHeroInventory({ weapon: WeaponName.SHORT_SWORD }),
  stats: createInitStats({ maxHealth: 100, maxMana: 100, health: 60, mana: 60 }),
}

export const initialEugene: Hero = {
  name: HeroName.IRENE,
  inventory: createInitHeroInventory({ weapon: WeaponName.SHORT_SWORD }),
  stats: createInitStats({ maxHealth: 100, maxMana: 100, health: 50, mana: 50 }),
}
