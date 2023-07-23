import { Character } from 'interfaces/game/character'
import CharacterIconLarge from './large'
import CharacterIconSmall from './small'

const CharacterIcon = ({ character }: { character: Character }) => {
  const isLarge = Math.random() < 0.5

  if (isLarge) return <CharacterIconLarge character={character} />
  return <CharacterIconSmall character={character} />
}

export default CharacterIcon
