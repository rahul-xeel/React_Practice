import { useState } from "react"
import User from "./User";

function App() {


  const [display, setDisplay] = useState(true);
  const [display2, setDisplay2] = useState(true);


  return (
    <>

      <button onClick={() => { setDisplay(!display) }}>Toggle Hello</button>

      {
        display ? <h1>Hello</h1> : null
      }

      <button onClick={() => { setDisplay2(!display2) }}>Toggle User Component</button>


      {
        display2 ? <User /> : null
      }

    </>
  )
}

export default App
