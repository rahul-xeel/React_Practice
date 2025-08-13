import React, { useEffect, useState } from 'react';
import Data from './Data';
function App() {

  const [dataAvalue, setDATAaVALUE] = useState(0);
  const [dataBvalue, setDATAbVALUE] = useState(0);
  const [display, setDisplay] = useState(true);

  return (

    <>

      {
        display ? <Data dataAvalue={dataAvalue} dataBvalue={dataBvalue} /> : null
      }

      <br />
      <button onClick={() => { setDATAaVALUE(dataAvalue + 1) }}>Add in Data A</button>
      <button onClick={() => { setDATAbVALUE(dataBvalue + 1) }}>Add in Data B</button>
      <button onClick={() => { setDisplay(!display) }}>TOGGLE</button>

      <h1>Open console to see changes</h1>


    </>

  );
}

export default App;
