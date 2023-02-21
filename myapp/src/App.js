import React, { Component } from 'react'
import Child from './Child'
// import './App.css';

class App extends Component {
  test() {
    console.log("hello")
  }
  render() {
    return (
      <div className="App">
        <Child/>
        {this.test()}
      </div>
    )
  }
}

export default App;
