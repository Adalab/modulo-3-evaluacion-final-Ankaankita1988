
function CharacterCard({info}) {

  return (
   <li>
      <img src={data.image} alt=""/>
      <p>Name:{info.name}</p>
      <p>Species:{info.species}</p>
      <p>House:{info.house}</p>
      <p>Gender:{info.gender}</p>
   </li>
  )
}

export default CharacterCard