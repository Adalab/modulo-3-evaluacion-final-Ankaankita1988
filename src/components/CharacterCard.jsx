
function CharacterCard({info}) {

  return (
   <li>
      <p>Photo:{info.image}</p>
      <p>Name:{info.name}</p>
      <p>Species:{info.species}</p>
      <p>House:{info.house}</p>
      <p>Gender:{info.gender}</p>
   </li>
  )
}

export default CharacterCard