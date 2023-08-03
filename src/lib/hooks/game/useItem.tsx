// TODO organise

import itemCollection from 'data/items'
import { ItemName } from 'interfaces/game/items'

const selectTargets = ({ target, targetType }: any) => {}

const selectUsedBy = () => {}

const useItem = (itemName: ItemName) => {
  const { target, targetType, executeItem } = itemCollection[itemName]
  const usedBy = selectUsedBy() as any
  const targets = selectTargets({ target, targetType }) as any

  return executeItem({ usedBy, targets })
}

export default useItem
