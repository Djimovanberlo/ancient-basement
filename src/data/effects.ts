import { Effect } from 'interfaces/game/effect'
import { EffectName } from 'interfaces/game/elements'

export const fireballEffect: Effect = ({ usedBy, targets }) => {
  const power = 5

  const newTargets = targets.map(target => ({
    ...target,
    status: {
      ...target.status,
      stats: {
        ...target.status.stats,
        health: target.status.stats.health - power,
      },
    },
  }))

  return { usedBy: { ...usedBy }, targets: newTargets }
}

const effectCollection: Record<EffectName, Effect> = {
  [EffectName.FIREBALL]: fireballEffect,
}

export default effectCollection
