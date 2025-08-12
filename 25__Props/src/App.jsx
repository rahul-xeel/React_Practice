import User from "./User"





function App() {


  const UserDetails = 
  {
    name:"Rahul",
    age:"21",
    mobile:"6209466064",
    gender:"male",
    address:
    {
      State:"Bihar",
      pincode:"123"
    }
  };

  return (
    <>
    
    <User Props={UserDetails}/>


    </>
  )
}

export default App
