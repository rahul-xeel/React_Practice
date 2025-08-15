

function Function_Refrence() {
  return alert("Function Refrence");
}


function Function_Call() {
  return alert("Function Call");
}


function Arg_With_Fun_Ref(Arg) {
  return alert(Arg);
}




function Arg_With_Fun_Call(Arg) {
  return alert(Arg);
}



function App() {

  return (
    <div>

      <h1>Case 1 : Function Refrence </h1>
      <button onClick={Function_Refrence}>CLICK ME !</button>
      <br />
      <br />

      <h1>Case 2 : Function Call ( )</h1>
      <button onClick={Function_Call()}>CLICK ME !</button>
      <br />
      <br />

      <h1>Case 3 : Argument With Function Refrence (Arraw function used) </h1>
      <button onClick={() => {Arg_With_Fun_Ref("Apple is Arg")}}>CLICK ME !</button>
      <br />
      <br />

       <h1>Case 4 : Argument With Function Call ( )</h1>
      <button onClick={Arg_With_Fun_Call("Ball is arg")}>CLICK ME !</button>
      <br />
      <br />




    </div>
  )
}

export default App
