import { useEffect, useState } from "react";
import getDataApi from "../services/api";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import FilterByName from "./FilterByName";

function App() {
  const [list, setList] = useState([]);
  const [filterName, setFilterName] = useState("");

  // Fetch data when the component mounts
  useEffect(() => {
    getDataApi().then((data) => {
      setList(data);
    });
  }, []);

  // Handle name change in the filter input
  const changeName = (value) => {
    setFilterName(value);
  };

  // Filter the list based on the filterName
  const filteredList = list.filter((item) =>
    item.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <>
      <h1>Harry Potter Characters</h1>
        <Filter changeName={changeName} />
        <CharacterList list={filteredList} />
        filterName={filterName}/
     </>
  );
}

export default App;
