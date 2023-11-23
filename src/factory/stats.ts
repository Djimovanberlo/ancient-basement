import { Stats } from 'interfaces/game/status'

export const createStats = (partialStats: Partial<Omit<Stats, 'health' | 'mana'>>): Stats => ({
  maxHealth: 0,
  maxMana: 0,
  health: partialStats.maxHealth ?? 0,
  mana: partialStats.maxMana ?? 0,
  strength: 0,
  defense: 0,
  agility: 0,
  intelligence: 0,
  resistance: 0,
  wisdom: 0,
  ...partialStats,
})
