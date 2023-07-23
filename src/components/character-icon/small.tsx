import { Character } from 'interfaces/game/character'

const CharacterIconSmall = ({ character }: { character: Character }) => {
  return <div className='characterIcon--small'>{character}</div>
}

export default CharacterIconSmall
