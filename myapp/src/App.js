import React, { Component } from 'react'
import Child from './Child'
// import Items from './components/items.js'
import Items2 from './components/items2.js'
import './App.css';

class App extends Component {
  state = {
    items: [
      { id: 1, name: 'Ahemd', age: 22, count: 2 },
      { id: 2, name: 'ali', age: 23, count: 3 },
      { id: 3, name: 'Tariq', age: 25, count: 5 },
      { id: 4, name: 'Omar', age: 32, count: 4 },
      { id: 5, name: 'Khaled', age: 62, count: 1 },
    ]
  }

  // state = {
  //   name: 'Ali'
  // }
  // handelChange = (e) => {
  //   console.log(e.target.value)
  //   this.setState({
  //     name: e.target.value
  //   })
  // }
  // handelSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(this.state.name)

  //   e.target.value = ''
  // }

  // handelSelect = (e) => {
  //   this.setState({
  //     name: e.target.value
  //   })
  // }

  render() {
    return (
      <div>
        <Child />
        <Items2 items={this.state.items} />
        <Items2 items={this.state.items} />
        {/* <form onSubmit={this.handelSubmit}>
          <input type="test" onChange={this.handelChange} />
          <select onChange={this.handelChange}>
            <option>select one</option>
            <option>select two</option>
            <option>select three</option>
          </select>
          <input type='submit' />
        </form>
        {this.state.name} */}
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