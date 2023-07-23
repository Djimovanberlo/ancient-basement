import { Stats } from 'interfaces/game/stats'

export const createInitStats = (partialStats: Partial<Stats>): Stats => {
  return {
    maxHealth: 0,
    maxMana: 0,
    health: 0,
    mana: 0,
    strength: 0,
    defense: 0,
    intelligence: 0,
    resistance: 0,
    agility: 0,
    ...partialStats,
  }
}
