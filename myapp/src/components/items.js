import React, { Component } from 'react'

class Items extends Component {

  render() {
    // const id = this.props.id
    // const name = this.props.name
    // const age = this.props.age
    // const { id, name, age } = this.props

    const { items } = this.props;
    const theItems = items.map((item) => {
      return (
        // you must add a unique key for every element
        // like id or random() number
        <div key={item.id}>
          <h3>{item.id}</h3>
          <h3>{item.name}</h3>
          <h3>{item.age}</h3>
          <hr />
        </div>
      )
    })

    return (
      <div>
        {theItems}
      </div>
    )
  }
}
export default Items