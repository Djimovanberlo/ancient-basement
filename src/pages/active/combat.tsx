import { ActiveGameProps } from 'interfaces/pages/active'
import Timeline from 'components/timeline'
import HeroCardsWrapper from 'components/hero-cards-wrapper'
import EnemiesWrapper from 'components/enemies-wrapper'
import { useRecoilValue } from 'recoil'
import { turnState } from 'store/turn/atoms'

const Combat = ({ updateGameState }: ActiveGameProps) => {
  const turn = useRecoilValue(turnState)
  console.log('T', turn)
  return (
    <div className='combat'>
      <Timeline />
      <EnemiesWrapper />
      <HeroCardsWrapper />
    </div>
  )
}

export default Combat
