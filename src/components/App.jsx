import { useEffect, useState } from "react";
import getDataApi from "../services/api";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import { Route, Routes } from "react-router-dom";


function App() {
  const [list, setList] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHome, setFilterHome] = useState ("Gryffindor");
   
  
    useEffect(() => {
    getDataApi().then((data) => {
      setList(data);
    });
  }, []);

   const changeName = (value) => {
    setFilterName(value);
  }
  const changeHome = (value) =>{
    setFilterHome(value);
  }
  
    const filteredList = list.filter((item) =>
    item.name.toLowerCase().includes(filterName.toLowerCase())
  )

   .filter (item => {
      return  item.house === filterHome
   }
   )
  
  return (
    <>
      <h1>Harry Potter Characters</h1>
        <Filter changeName={changeName}  filterName={filterName} changeHome={changeHome} filterHome={filterHome}/>
      
        <Routes>
        <Route path="/" element={ <CharacterList list={filteredList} />} />
       </Routes>
     </>
  )
}
 export default App
