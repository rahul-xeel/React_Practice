function Name_Finder(second_function_name) {
  const Name = prompt("What is Your Name?");
  second_function_name(Name);
}

function Greet(name) {
  alert("Good Day! " + name);
}

function App() {
  return (
    
      Name_Finder(Greet)
  )
}

export default App;
