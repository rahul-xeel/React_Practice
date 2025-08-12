import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    alert("Effect hit");
  }, []); 

  return (
    <>
      <h1>UseEffect Dependency Array</h1>
    </>
  );
}

export default App;
