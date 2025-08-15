
function App() {

  return (
    <>
     
    <h1>Current Target</h1>
    <h2>event.currentTarget is the element on which the event handler is currently attached and actively handling the event.</h2>
    <br />
    <h2>Example</h2>

    <div value="Parent" onClick={(event)=>alert(event.currentTarget)}>
      <h3>{'<div  onClick={(event)=>alert(event.currentTarget)}>'}  Div as Parent tag</h3>

      <h3>{'<button>Child 1</button>'}</h3>
      <button>Click</button>

      <h3>{'<button>Child 2</button>'}</h3>
      <button>Click</button>

      <h3>{'</div>'}</h3>
    </div>


    <br />
    <br />
    <hr />
    <br />
    <br />

      
    <h1>Target</h1>
    <h2>event.target is the actual element that triggered or originated the event. It is the deepest nested element where the event occurred.</h2>
    <br />
    <h2>Example</h2>

    <div value="Parent" onClick={(event)=>alert(event.target)}>
      <h3>{'<div  onClick={(event)=>alert(event.target)}>'}  Div as Parent tag</h3>

      <h3>{'<button>Child 1</button>'}</h3>
      <button>Click</button>

      <h3>{'<button>Child 2</button>'}</h3>
      <button>Click</button>

      <h3>{'</div>'}</h3>
    </div>



    </>
  )
}

export default App
