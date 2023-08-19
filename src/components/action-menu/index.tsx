import { useRecoilValue } from 'recoil'

import { HeroActionName } from 'interfaces/game/character-actions'
import ItemMenu from 'components/item-menu'
import { turnState } from 'store/turn/atoms'

const ActionMenu = () => {
  const { action } = useRecoilValue(turnState)

  return (
    <div className='actionMenu'>
      {/* {action === HeroActionName.ABILITY && <AbilityMenu />} */}
      {action === HeroActionName.ITEM && <ItemMenu />}
      {/* {action === HeroActionName.INVENTORY && <InventoryMenu />} */}
    </div>
  )
}

export default ActionMenu
