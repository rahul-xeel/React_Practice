import { useState } from "react"


function App() {


  const [value, setvalue] = useState([]);

  function rahul(event) {

      if (event.target.checked) {
        setvalue([...value, event.target.value])
      }
      else
      {
        setvalue(value.filter(item => item !== event.target.value)) 
      }

  }



  return (
    <>

      <h1>Checkbox Handling</h1>

      <label htmlFor="react">REACT</label> <input onChange={rahul} id="react" type="checkbox" value="React" />
      <br />
      <label htmlFor="java">JAVA</label> <input onChange={rahul} id="java" type="checkbox" value="JAVA" />
      <br />
      <label htmlFor="spring">SPRING</label> <input onChange={rahul} id="spring" type="checkbox" value="SPRING" />
      <br />
      <label htmlFor="sd">SD</label> <input onChange={rahul} id="sd" type="checkbox" value="SD" />

      <br />

      <h1>{value.toString()}</h1>

    </>
  )
}

export default App
