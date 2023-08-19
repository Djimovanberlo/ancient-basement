import { createInitStats } from 'factory/stats'
import { Enemy, EnemyName } from 'interfaces/game/enemy'

// TODO make factory
export const goblin: Enemy = {
  name: EnemyName.GOBLIN,
  id: 'e1',
  abilities: [],
  status: {
    stats: createInitStats({
      maxHealth: 10,
    }),
    buffs: [],
    debuffs: [],
    ailments: [],
  },
}
