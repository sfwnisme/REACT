import React, { Component } from 'react'
class Child extends Component {
  Test() {
    <p>this is an arrow function</p>
  }
  render() {
    return (
      <div>
        React HHHHHHHHHaaai
        {this.Test()}
      </div>
    )
  }
}

export default Child;