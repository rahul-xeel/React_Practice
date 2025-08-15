import { useRef } from "react"



function App() {

  const focus = useRef(null);

  return (
    <>

      <input ref={focus} type="text" name="" id="" placeholder="Input" />

      <br />
      <br />
      <button onClick={() => { focus.current.focus() }}>Focus on Input Field</button>
      <br />
      <br />
      <button onClick={() => { focus.current.placeholder = "New Place Holder" }}>New Place HOlder on Input Field</button>
      <br />
      <br />
      <button onClick={() => { focus.current.style.color="red" }}>Change Color in Input Field</button>
      <br />
      <br />
      <button onClick={() => { focus.current.value="New Value"}}>CHange Value of Input Field</button>
      <br />
      <br />
      <button onClick={() => { focus.current.style.display="none" }}>Hide Input Field</button>
      <br />
      <br />
      <button onClick={() => { focus.current.style.display="flex" }}>Show Input Field</button>



    </>
  )
}

export default App
