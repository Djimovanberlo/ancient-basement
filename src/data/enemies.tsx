import { createInitStats } from 'factory/stats'
import { Enemy, EnemyName } from 'interfaces/game/enemy'

export const goblin: Enemy = {
  name: EnemyName.GOBLIN,
  id: 'e-1',
  stats: createInitStats({
    maxHealth: 10,
    health: 10,
  }),
  abilities: [],
}
