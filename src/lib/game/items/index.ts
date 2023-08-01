import itemCollection from 'data/items'
import { CharacterActionActors } from 'interfaces/game/character-actions'
import { ItemName } from 'interfaces/game/items'

export const handleItem =
  (item: ItemName) =>
  ({ usedBy, mainTarget, secondaryTargets }: CharacterActionActors) => {
    const { executeItem } = itemCollection[item]
    return executeItem({ usedBy, mainTarget, secondaryTargets })
  }

const handleFireBall = handleItem(ItemName.FIREBALL)
