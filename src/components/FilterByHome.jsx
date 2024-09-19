
function FilterByHome({changeHome, filterHome}) {

  const handleChange =(ev) =>{
    changeHome(ev.target.value)
  }
  return (
    <div>
      <label htmlFor="home">Busca por casa</label>
      <select name="home" id="home" value={filterHome} onChange={handleChange}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Stytherin">Stytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </div>
  )
}

export default FilterByHome