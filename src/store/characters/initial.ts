import { createInitHeroInventory } from 'factory/inventory'
import { createInitStats } from 'factory/stats'
import { CharacterType } from 'interfaces/game/character'
import { WeaponName } from 'interfaces/game/equipment'
import { Hero, HeroName } from 'interfaces/game/hero'

// TODO factory
export const initialIrene: Hero = {
  name: HeroName.IRENE,
  characterType: CharacterType.HERO,
  id: 1,
  inventory: createInitHeroInventory({ weapon: WeaponName.SHORT_SWORD }),
  stats: createInitStats({ maxHealth: 100, maxMana: 100 }),
  buffs: [],
  debuffs: [],
  ailments: [],
}

export const initialChad: Hero = {
  name: HeroName.CHAD,
  characterType: CharacterType.HERO,
  id: 2,
  inventory: createInitHeroInventory({ weapon: WeaponName.SHORT_SWORD }),
  stats: createInitStats({ maxHealth: 100, maxMana: 100 }),
  buffs: [],
  debuffs: [],
  ailments: [],
}

export const initialOlive: Hero = {
  name: HeroName.OLIVE,
  characterType: CharacterType.HERO,
  id: 3,
  inventory: createInitHeroInventory({ weapon: WeaponName.SHORT_SWORD }),
  stats: createInitStats({ maxHealth: 100, maxMana: 100 }),
  buffs: [],
  debuffs: [],
  ailments: [],
}

export const initialEugene: Hero = {
  name: HeroName.EUGENE,
  characterType: CharacterType.HERO,
  id: 4,
  inventory: createInitHeroInventory({ weapon: WeaponName.SHORT_SWORD }),
  stats: createInitStats({ maxHealth: 100, maxMana: 100 }),
  buffs: [],
  debuffs: [],
  ailments: [],
}
