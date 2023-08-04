import { useRecoilValue } from 'recoil'

import { ActiveGameProps } from 'interfaces/pages/active'
import Timeline from 'components/timeline'
import HeroCardsWrapper from 'components/hero-cards-wrapper'
import EnemiesWrapper from 'components/enemies-wrapper'
import ActionMenu from 'components/action-menu'
import { selectTurnAction } from 'store/turn/selectors'

const Combat = ({ updateGameState }: ActiveGameProps) => {
  const action = useRecoilValue(selectTurnAction)

  return (
    <div className='combat'>
      <Timeline />
      <EnemiesWrapper />
      {action && <ActionMenu />}
      <HeroCardsWrapper />
    </div>
  )
}

export default Combat
