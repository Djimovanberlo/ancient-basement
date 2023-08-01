import { Item, ItemCollection, ItemName } from 'interfaces/game/items'

export const FireBallItem: Item = {
  name: ItemName.FIREBALL,
  executeItem: ({ usedBy, mainTarget, secondaryTargets }) => ({ mainTarget, secondaryTargets, usedBy }),
}

export const IceBallItem: Item = {
  name: ItemName.ICEBALL,
  executeItem: ({ usedBy, mainTarget, secondaryTargets }) => ({ mainTarget, secondaryTargets, usedBy }),
}

export const PotionItem: Item = {
  name: ItemName.POTION,
  executeItem: ({ usedBy, mainTarget, secondaryTargets }) => ({ mainTarget, secondaryTargets, usedBy }),
}

const itemCollection: ItemCollection = {
  [ItemName.FIREBALL]: FireBallItem,
  [ItemName.ICEBALL]: IceBallItem,
  [ItemName.POTION]: PotionItem,
}

export default itemCollection
