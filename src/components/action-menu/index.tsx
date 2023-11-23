import React, { useMemo } from 'react'
import { useRecoilValue } from 'recoil'

import { ActionName } from 'interfaces/game/character-actions'
import ItemMenu from 'components/item-menu'
import turnState from 'store/turn/atoms'

const ActionMenu = () => {
  const { action } = useRecoilValue(turnState)

  const memoizedActionMenu = useMemo(() => {
    return (
      <div className='actionMenu'>
        {/* {action === ActionName.ABILITY && <AbilityMenu />} */}
        {action === ActionName.ITEM && <ItemMenu />}
        {/* {action === ActionName.INVENTORY && <InventoryMenu />} */}
      </div>
    )
  }, [action])

  return memoizedActionMenu
}

export default ActionMenu
