import React, { Component } from 'react'
import Child from './Child'
// import './App.css';

class App extends Component {
  // in the element attribute field it needs to add .bind(this) after the function name
  state = {
    name: 'Borada',
    name2: 'Change me'
  }

  // static function
  onClick() {
    console.log('static click function')
  }
  // arrow function
  onClick2 = () => console.log('arrow click function')

  // using state
  // static function
  onClick3() {
    console.log(this.state.name, 'from state')
  }
  // arrow function 
  onClick4 = () => {
    console.log(this.state.name, ' from state with arrow no .bind(this)')
  }



  changeState = () => {
    this.state.name2 = "new name"
    this.setState({
      name2: 'Changed'
    })
  }

  render() {
    return (
      <div className="App">
        <Child />
        {/* using the events normally without any additions */}
        <button onClick={this.onClick}>Click static</button>
        <button onClick={this.onClick2}>Click arrow</button>

        {/* using events with state method */}
        <button onClick={this.onClick3.bind(this)}>Click static with state</button>
        <button onClick={this.onClick3}>Click static with state no .bind(this)</button>
        <button onClick={this.onClick4}>Click arrow with state no .bind(this)</button>

        {/* click on this element and will see the changes */}
        <h2 onClick={this.changeState}>{this.state.name2}</h2>
      </div>
    )
  }
}

export default App;


// ====| EVENTS
/* So
* using function static or arrow works normal
* using static function with state object needs 
to type like this => (functionName.bind(this))
#.bind(this) will move on and target the js 
class the class that contains the function or the process
* using arrow function with state object will be helpful
and best option due to you can avoid usnig .bind(this) method 
SO using arrow function with state is the perfect way

*/