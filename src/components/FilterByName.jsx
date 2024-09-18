/*
function FilterByName({changeName, filterName}) {
  const handleChange = (ev)  =>{
    changeName (ev.target.value) 
  } */
 /* return (
    <div>
      <label htmlFor="name">Busca por personaje</label>
      <input type="text" name="name" id="name" onChange={handleChange} checked ={filterName.includes{name}}/>
    </div>
  ) 
} 

export default FilterByName */

function FilterByName({ changeName, filterName }) {
  // Handle input change event
  const handleChange = (ev) => {
    changeName(ev.target.value);
  };

  return (
    <div>
      <label htmlFor="name">Busca por personaje</label>
      {/* Use value instead of checked to make it a controlled input */}
      <input
        type="text"
        name="name"
        id="name"
        value={filterName}  // Controlled input value
        onChange={handleChange}  // Handle the input change
      />
    </div>
  );
}

export default FilterByName;
