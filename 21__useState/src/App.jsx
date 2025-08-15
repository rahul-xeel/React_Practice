import { useState } from "react"


function App() {


  const [Name, setname] = useState("Rahul");

  return (
    <div style={{width:"100vw", display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>

      <h1>{Name}</h1>

      <button onClick={()=>{setname(prompt("What is the new name"))}}>Click to change name</button>


    </div>
  )
}

export default App
