import React, { Component } from 'react'
import Child from './Child'
import Items from './components/items.js'
import './App.css';

class App extends Component {
  state = {
    items: [
      { id: 1, name: "ahmed", age: 22 },
      { id: 2, name: "tariq", age: 26 },
    ]
  }
  render() {
    return (
      <div>
        <Child />
        <Items items={this.state.items} />

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