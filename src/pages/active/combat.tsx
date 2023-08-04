import { ActiveGameProps } from 'interfaces/pages/active'
import Timeline from 'components/timeline'
import HeroCardsWrapper from 'components/hero-cards-wrapper'
import EnemiesWrapper from 'components/enemies-wrapper'

const Combat = ({ updateGameState }: ActiveGameProps) => {
  return (
    <div className='combat'>
      <Timeline />
      <EnemiesWrapper />
      <HeroCardsWrapper />
    </div>
  )
}

export default Combat
