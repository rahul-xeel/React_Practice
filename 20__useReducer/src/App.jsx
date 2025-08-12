
import { useReducer } from "react";

function App() {


  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return initialState;
      default:
        return state;
    }
  }




  const [state, dispatch] = useReducer(reducer, initialState);



  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Click to +1</button>
      <br />
      <button onClick={() => dispatch({ type: "decrement" })}>CLick to -1</button>
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>Click to Reset</button>
    </div>
  );
}



export default App
