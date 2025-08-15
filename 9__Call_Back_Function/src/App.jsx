function Name_Finder(second_function_name) {
  const Name = prompt("What is Your Name?");
  second_function_name(Name);
}

function Greet(name) {
  alert("Good Day! " + name);
}

function App() {
  return (

    <>

      {Name_Finder(Greet)}

      <h1>Callback Function:</h1>
      <ul>
        <li>A callback function is a function that is passed as an argument to another function and is invoked (called) when needed.</li>
        <li>In simple terms: You pass a function as an argument to another function. The function that receives the argument will call the passed function (callback) at the appropriate time or under specific conditions.</li>
      </ul>

      <h3>

        {'  function greet(name) { '} <br />
        {'  alert("Hello " + name);    '} <br />
        {'}'}

        <br />
        <br />

        {' function Name_Finder(Callback) {           '}  <br />
        {' name = promt("What is your name ?")'}    <br />
        {'  callback(name);                               '} <br />
        {' }   '} 
        <br />
         <br />

        {'  Name_Finder(greet); '}


      </h3>


    </>

  )
}

export default App;
