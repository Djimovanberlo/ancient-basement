import { ActiveGameProps } from 'interfaces/pages/active'
import { Character } from 'interfaces/game/character'
import CharacterCard from 'components/character-card'
import Timeline from 'components/timeline'

const Combat = ({ updateGameState }: ActiveGameProps) => {
  return (
    <div className='combat'>
      <Timeline />
      <CharacterCard character={Character.IRENE} />
      <CharacterCard character={Character.CHAD} />
      <CharacterCard character={Character.OLIVE} />
      <CharacterCard character={Character.EUGENE} />
    </div>
  )
}

export default Combat
