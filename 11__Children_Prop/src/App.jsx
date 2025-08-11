

function Component_A(props) {

  return (

    <h1>{props.children}</h1>
  );

}


function App() {

  return (

    <Component_A>

      <h2>Title</h2>
      <p>This is the card content.</p>
    
    </Component_A>

   

  )

}

export default App;