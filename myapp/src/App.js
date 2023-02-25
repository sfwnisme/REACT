import React, { Component } from 'react'
import Child from './Child'
// import Items from './components/items.js'
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log('mount')
  }
  constructor() {
    super()
    console.log('constructor');
  }

  render() {
    console.log('render')
    return (
      <div>
      </div>
    )
  }
}

export default App;

