
function FilterByName({changeName, filterName}) {
  const handleChange = (ev)  =>{
    changeName (ev.target.value) 
  } 

  return (
    <div>
      <label htmlFor="name">Busca por personaje</label>
      <input type="text" name="name" id="name" value={filterName} onChange={handleChange} />
    </div>
  )
}

export default FilterByName 
