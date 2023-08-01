// TODO organise

import { ItemName } from 'interfaces/game/items'
import { handleItem } from 'lib/game/items'

const selectMainTarget = () => {}

const selectSecondaryTargets = () => {}

const selectUsedBy = () => {}

const useItem = () => {
  const usedBy = selectUsedBy()
  const mainTarget = selectMainTarget()
  const secondaryTargets = selectSecondaryTargets()

  //   const newValues = handleItem({ usedBy, mainTarget, secondaryTargets })

  // actions for
  // updateStats, updateInventory

  //   return (itemName: ItemName) => {
  //     return handleItem(itemName)
  //   }
}
