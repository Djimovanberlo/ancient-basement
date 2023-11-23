import { useRecoilValue } from 'recoil'

import { GameState } from 'interfaces/game/game'
import useCreateNewRound from 'lib/hooks/game/useCreateNewRound'
import turnState from 'store/turn/atoms'
import Timeline from 'components/timeline'
import HeroCardsWrapper from 'components/hero-cards-wrapper'
import EnemiesWrapper from 'components/enemies-wrapper'
import ActionMenu from 'components/action-menu'
import TargetMenu from 'components/target-menu'

interface Props {
  updateGameState: (newGameState: GameState) => void
}

const Combat = ({ updateGameState }: Props) => {
  const { action, targeting } = useRecoilValue(turnState)
  useCreateNewRound()

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
