import { useState } from "react";

function App() {


  const [value, setValue] = useState("");


  return (
  <>


    <input value={value} onChange={(event)=>{setValue(event.target.value)}} type="text" />
    <h1>{value}</h1>
    <button onClick={()=>{setValue("")}}>Reset</button>

    </>
  )
}

export default App
