function App() {
  return (
    <>
      <h1>Attributes vs Props</h1>

      <h2>Attribute</h2>
      <ul>
        <li>{'<input type="text" placeholder="Enter your name" className="input-field" />'}</li>
        <li>type, placeholder, aur class these are  attributes. that tells the browser, how the element will behave.</li>
      </ul>

<br />
<br />

      <h2>Props</h2>
      <ul>
        <li>{'function Greeting(props) {return <h1>Hello, {props.name}!</h1>;}}'}</li>
        <li>{'function App() { return <Greeting name="Rahul" age="18" />; }'}</li>
        <li>Yahan name="Rahul" or age="18"  props hain jo Greeting component ko diya gaya hai.</li>
      </ul>


    </>
  );
}

export default App;
