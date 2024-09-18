import FilterByName from "./FilterByName"

function Filter({changeName, filterName}) {
  return (
    <form>
      <FilterByName changeName={changeName}/>
      filterName={filterName}
    </form>
  )
}

export default Filter