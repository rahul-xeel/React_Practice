import { useState } from "react"


function App() {


  const [num, setNum] = useState(0);

  return (
    <>
      <h1>Current Count :- {num}</h1>

      <button onClick={() => { setNum(num + 1) }}>Change count ( + )</button>
      <button onClick={() => { setNum(num - 1) }}>Change count ( - )</button>


      {
        num == 0 ? <h1>Condition for 0</h1>
          : num == 1 ? <h1>Condition for 1</h1>
            : num == 2 ? <h1>Condition for 2</h1>
              : num == 3 ? <h1>Condition for 3</h1>
                : num == 4 ? <h1>Condition for 4</h1>
                  : num == 5 ? <h1>Condition for 5</h1>
                    : num == 6 ? <h1>Condition for 6</h1>
                      : num == 7 ? <h1>Condition for 7</h1>
                        : num == 8 ? <h1>Condition for 8</h1>
                          : num == 9 ? <h1>Condition for 9</h1>
                            : <h1>Condition not set</h1>
      }




    </>
  )
}

export default App
