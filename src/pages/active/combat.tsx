import { ActiveGameProps } from 'interfaces/pages/active'
import Timeline from 'components/timeline'
import CharacterCardsWrapper from 'components/character-cards-wrapper'

const Combat = ({ updateGameState }: ActiveGameProps) => {
  return (
    <div className='combat'>
      <Timeline />
      <CharacterCardsWrapper />
    </div>
  )
}

export default Combat
