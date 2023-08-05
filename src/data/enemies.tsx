import { createInitStats } from 'factory/stats'
import { Enemy, EnemyName } from 'interfaces/game/enemy'

export const Goblin: Enemy = {
  name: EnemyName.GOBLIN,
  stats: createInitStats({
    maxHealth: 10,
    health: 10,
  }),
  abilities: [],
}
