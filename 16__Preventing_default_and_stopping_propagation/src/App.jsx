

function App() {

  return (
    <>

      <h1>Prevent Deafult</h1>
      <h2>preventDefault() is a method of the event object in JavaScript that stops the browser’s default behavior for a given event.</h2>
      <h2>Example</h2>

      <a onClick={(event) => { event.preventDefault(); alert("You cliked the link, but not redirected as Deafult "); }} href="https://www.google.com">Clink on the Link :- www.google.com</a>

      <br />
      <br />
      <hr />
      <br />
      <br />


      <h1>Stop Propagation</h1>
      <h2>stopPropagation() is a method of the event object in JavaScript that stops the event from bubbling up (or propagating) through the parent elements in the DOM tree.</h2>
      <h2>Example</h2>


      <div  onClick={() => {alert("Parent CLicked")} }style={{backgroundColor:"Red",width:"100%",height:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h2 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Click Parent</h2>
         <div onClick={(event) => {event.stopPropagation(); alert("Child  CLicked");}} style={{backgroundColor:"blue",width:"50%",height:"100px"}}>
        <h2 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Click Child {'onClick={(event) => {event.stopPropagation(); alert("Child  CLicked");}'}</h2>
        </div>
      </div>



    </>
  )
}

export default App
