import CharacterIcon from 'components/character-icon'
import { HeroName } from 'interfaces/game/hero'

const Timeline = () => {
  return (
    <div className='timeline'>
      <CharacterIcon character={HeroName.IRENE} />
      <CharacterIcon character={HeroName.CHAD} />
      <CharacterIcon character={HeroName.OLIVE} />
      <CharacterIcon character={HeroName.EUGENE} />
    </div>
  )
}

export default Timeline
