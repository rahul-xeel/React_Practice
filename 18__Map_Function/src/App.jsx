
function App() {

  const Customer_details_in_JSON = [

    {
      name:"Rahul",
      Age:"20",
      Phone:"6209466064"     
    },
    {
      name:"Raju",
      Age:"21",
      Phone:"6209466064"     
    },
     {
      name:"Ramu",
      Age:"22",
      Phone:"6209466064"     
    }

  ];


  return (
    <>
      
      <h1>Using Map Function In JSON</h1>

       {Customer_details_in_JSON.map((Data, index) => (

          <div>
                <h3 key={index}>Name: {Data.name} </h3>
                <h3 key={index}>Age: {Data.Age} </h3>
                <h3 key={index}>Phone: {Data.Phone} </h3>
                <hr />
          </div>
          
               
            ))}
      

    </>
  )
}

export default App

