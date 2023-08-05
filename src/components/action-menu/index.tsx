import { useRecoilValue } from 'recoil'

import { HeroActionName } from 'interfaces/game/character-actions'
import { selectTurnAction } from 'store/turn/selectors'
import ItemMenu from 'components/item-menu'

const ActionMenu = () => {
  const action = useRecoilValue(selectTurnAction)

  return (
    <div className='actionMenu'>
      {/* {action === HeroActionName.ABILITY && <AbilityMenu />} */}
      {action === HeroActionName.ITEM && <ItemMenu />}
      {/* {action === HeroActionName.INVENTORY && <InventoryMenu />} */}
    </div>
  )
}

export default ActionMenu
