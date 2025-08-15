
function Compoenent_A(props) {
  return (
    <h1>{props.children}</h1>
  )



}

function App() {
  return (


    <Compoenent_A>
      <h2>Hello World!</h2>
      <p>This is inside the container.</p>
    </Compoenent_A>

  );
}

export default App;


