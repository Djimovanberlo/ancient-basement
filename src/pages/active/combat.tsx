import { ActiveGameProps } from 'interfaces/pages/active'
import Timeline from 'components/timeline'
import HeroCardsWrapper from 'components/hero-cards-wrapper'

const Combat = ({ updateGameState }: ActiveGameProps) => {
  return (
    <div className='combat'>
      <Timeline />
      <HeroCardsWrapper />
    </div>
  )
}

export default Combat
