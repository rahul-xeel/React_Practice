const name = "RAHUL KUMAR";


function App() {

  return (
   

    <div>

      <h1>{name} TODOS</h1>
      <img style={{height:"450px", width:"450px"}} src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Golden-Retriever.jpg?v=1645179525" alt="Dog" />
      <ul>
        <li>I have to learn About Docker</li>
        <li>And then after i to have to learn About Azure</li>
        <li>And Bla bla bla...</li>
      </ul>
      <button onClick={()=>{alert("Button Clicked")}}>Button </button>


    </div>

  )
}

export default App
