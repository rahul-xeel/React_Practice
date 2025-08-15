
const Customer_Details = [

  {
    Name:"Rahul",
    Age:"22",
    Gener:"Male",
    Phone:"6209466064",
    Profession:"Software Engineer"
  },
  {
    Name:"Kumar",
    Age:"19",
    Gener:"Male",
    Phone:"9999999999",
    Profession:"Doctor"
  },
  {
    Name:"Raju",
    Age:"18",
    Gener:"Male",
    Phone:"8888888888",
    Profession:"Civil Engineer"
  }


]



function App() {

  return (
   

    <div>
      
      <h1>Customer Details</h1>
      <br />

      
      <h2>Name: {Customer_Details[0].Name}</h2>
      <h2>Age: {Customer_Details[0].Age}</h2>
      <h2>Gender: {Customer_Details[0].Gener}</h2>
      <h2>Phone: {Customer_Details[0].Phone}</h2>
      <h2>Profession: {Customer_Details[0].Profession}</h2>
      <hr />

       <h2>Name: {Customer_Details[1].Name}</h2>
      <h2>Age: {Customer_Details[1].Age}</h2>
      <h2>Gender: {Customer_Details[1].Gener}</h2>
      <h2>Phone: {Customer_Details[1].Phone}</h2>
      <h2>Profession: {Customer_Details[1].Profession}</h2>
      <hr />

       <h2>Name: {Customer_Details[2].Name}</h2>
      <h2>Age: {Customer_Details[2].Age}</h2>
      <h2>Gender: {Customer_Details[2].Gener}</h2>
      <h2>Phone: {Customer_Details[2].Phone}</h2>
      <h2>Profession: {Customer_Details[2].Profession}</h2>

    </div>


  )
}

export default App
