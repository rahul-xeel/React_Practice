function App() {
  return (
    <>

      <h1>Event Delegation</h1>
      <h2>Event Delegation is a technique in JavaScript where instead of attaching event listeners to multiple child elements, you attach a single event listener to a parent element. This parent listener uses the event’s bubbling phase to catch events from its children, and then you check which child triggered the event.</h2>

      <br />
      <hr />
      <br />
            
      <h1>Example :-</h1>
      <h2>{'<div onClick={(event)=>{alert(event.target.innerHTML)}} >'} (Parent Tag)</h2>

      <div onClick={(event)=>{alert(event.target.innerHTML)}}>
        <button>{'<button>'} Child One {'<button>'} </button>
        <br />
        <br />
        <button>{'<button>'} Child Two {'<button>'} </button>
      </div>
    
      <h2> {'</div>'}</h2>



    </>
  )
}

export default App
