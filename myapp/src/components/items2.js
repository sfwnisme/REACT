import React, { Component } from 'react'
import "./items2.css"

class Items2 extends Component {
  render() {
    let { items } = this.props
    let itemsList = items.map((item) => {
      return item.count > 0 ? (
        <div key={item.id} className="cont">
          <div>{item.id}</div>
          <div>{item.name}</div>
          <div>{item.age}</div>
          <hr />
        </div>
      ) : (null)
    })
    return (
      <div className='parent'>
        {itemsList}
      </div>
    )
  }
}

export default Items2;