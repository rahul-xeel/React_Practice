import Header from "./Header"
import Footer from "./Footer"
import MainBody from "./MainBody"



function Sum(){

  const a = "20";
  return a ;
}

const fruit = "apple";


function App() {

  return (


    <div>

      <h1>THese Are My Components</h1>
       <Header  />
       <MainBody />
       <Footer />
       <h1>{Sum()}</h1>   
       <h1>{fruit}</h1>
      <h1>Mai {Sum()} {fruit} kha sakta hu</h1> 

    </div>

  )

}

export default App

