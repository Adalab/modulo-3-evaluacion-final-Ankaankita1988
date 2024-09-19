import FilterByHome from "./FilterByHome"
import FilterByName from "./FilterByName"

function Filter({changeName, filterName, changeHome}) {
  return (
    <form>
      <FilterByName changeName={changeName} 
      filterName={filterName} />
      <FilterByHome changeHome={changeHome}/>
    </form>
  )
}

export default Filter