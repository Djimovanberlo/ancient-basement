import { Character } from 'interfaces/game/character'
import CharacterIcon from 'components/character-icon'

const Timeline = () => {
  return (
    <div className='timeline'>
      <CharacterIcon character={Character.IRENE} />
      <CharacterIcon character={Character.CHAD} />
      <CharacterIcon character={Character.OLIVE} />
      <CharacterIcon character={Character.EUGENE} />
    </div>
  )
}

export default Timeline
