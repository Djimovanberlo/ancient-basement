import CharacterCard from 'components/character-card'
import { Character } from 'interfaces/game/character'

const CharacterCardsWrapper = () => (
  <div className='characterCardsWrapper'>
    <CharacterCard character={Character.IRENE} />
    <CharacterCard character={Character.CHAD} />
    <CharacterCard character={Character.OLIVE} />
    <CharacterCard character={Character.EUGENE} />
  </div>
)

export default CharacterCardsWrapper
