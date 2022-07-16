import { Character } from 'interfaces/game/character'

const CharacterIconLarge = ({ character }: { character: Character }) => {
  return <div className='characterIcon characterIcon--large'>{character}</div>
}

export default CharacterIconLarge
