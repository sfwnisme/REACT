import React, { Component } from 'react'

class Items2 extends Component {
  render() {
    let { items } = this.props
    let itemsList = items.map((item) => {
      // if (item.count > 2) {
      //   return (
      //     <div key={item.id} className="cont">
      //       <div>{item.id}</div>
      //       <div>{item.name}</div>
      //       <div>{item.age}</div>
      //       <hr />
      //     </div>
      //   )
      // } else {
      //   return false;
      // }
      return item.count > 2 ? (
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