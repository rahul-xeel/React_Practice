import { useState } from "react";


function App() {

  const [gender, setgender] = useState("Male");

  const [address, setaddress] = useState("Delhi");


  return (
    <>

      <h1> Gender :- {gender} </h1>

      <label htmlFor="male">Male</label> <input onChange={(event) => { setgender(event.target.value) }} name="gender" id="male" type="radio" value="male" />
      <label htmlFor="female">Female</label> <input onChange={(event) => { setgender(event.target.value) }} name="gender" id="female" type="radio" value="female" />


      <h1> Address :- {address} </h1>


      <select onChange={(event) => {setaddress(event.target.value)}}>
        <option value="Delhi" selected>Delhi</option>
        <option value="Gurgaon">Gurgaon</option>
        <option value="Noida">Noida</option>

      </select>



    </>
  )
}

export default App
