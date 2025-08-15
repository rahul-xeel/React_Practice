
const Customer_Details =
{
  Name: "Rahul",
  Age: "22",
  Gender: "Male",
  PhoneNo: "6209466064",
  Profession: "Software Engineer"
}



function App() {

  return (

    <div>

      <h1>Customer Details</h1>
      <h2>Name :- {Customer_Details.Name} </h2>
      <h2>Age :- {Customer_Details.Age}  </h2>
      <h2>Gender :- {Customer_Details.Gender} </h2>
      <h2>Phone No :- {Customer_Details.PhoneNo} </h2>
      <h2>Profession :- {Customer_Details.Profession} </h2>


    </div>

  )
}

export default App
