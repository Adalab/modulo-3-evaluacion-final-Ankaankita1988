
function CharacterCard({info}) {

  return (
   <li>
      <p>{info.image}</p>
      <p>{info.name}</p>
      <p>{info.species}</p>
   </li>
  )
}

export default CharacterCard