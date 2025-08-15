import React, { Component } from 'react';

class Rahul extends Component {
  render() {
    return <h2>Rahul</h2>;
  }
}






class App extends Component {
  render() {
    return (
      <>
        <h1>My name is</h1>
        <Rahul />
      </>
    );
  }
}

export default App;