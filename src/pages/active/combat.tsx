import { useRecoilValue } from 'recoil'

import { ActiveGameProps } from 'interfaces/pages/active'
import { turnState } from 'store/turn/atoms'
import Timeline from 'components/timeline'
import HeroCardsWrapper from 'components/hero-cards-wrapper'
import EnemiesWrapper from 'components/enemies-wrapper'
import ActionMenu from 'components/action-menu'
import TargetMenu from 'components/target-menu'

const Combat = ({ updateGameState }: ActiveGameProps) => {
  const { action, targeting } = useRecoilValue(turnState)

  return (
    <div className='combat'>
      <Timeline />
      <EnemiesWrapper />
      {action && !targeting && <ActionMenu />}
      {targeting && <TargetMenu />}
      <HeroCardsWrapper />
    </div>
  )
}

export default Combat
