import React, { useState } from "react";

let count = 0;

const RenderCounter = React.memo(function RenderCounter(props) {
  count += 1;

  return (
    <>
      <h1>
        Render Count: {count} And Current color name is {props.color_name}
      </h1>
    </>
  );
});



function App() {
  const [color, setcolor] = useState("red");

  function colorChanger() {
    const input = prompt("Enter color name !!");
    if (input !== null) {
      setcolor(input);
    }
  }

  return (
    <div style={{ width: "100vw", height: "60vh", backgroundColor: color, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
     
      <button onClick={colorChanger}>
        <h1>Change the color</h1>
      </button>
          
      <RenderCounter color_name={color} />
    </div>
  );
}

export default App;
