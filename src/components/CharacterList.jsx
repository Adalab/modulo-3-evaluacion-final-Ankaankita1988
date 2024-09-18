import CharacterCard from "./CharacterCard"

function CharacterList({list}) {

  const html = list.map( (item, i ) => <CharacterCard key = {i} info = {item} /> )
 
  return (
    <ul>
      {html}
    </ul>
  )
}

export default CharacterList