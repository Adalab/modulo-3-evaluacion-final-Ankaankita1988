import { useEffect,useState } from "react"
import getDataApi from "../services/api"
import CharacterList from "./CharacterList"

function App() {
  const [list, setList]= useState ([])

  useEffect(() =>{
    getDataApi().then (data =>{
      setList(data)
    })
  },[])
  
    return (
    <>
      <h1>Template</h1>
      <CharacterList  list={list}/>
    </>
  )
}

export default App
