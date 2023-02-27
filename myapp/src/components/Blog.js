import React, { Component } from 'react'
import axios from 'axios'
import './Blog.css'

class Blog extends Component {

  state = {
    users: [],
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data)
        this.setState({
          users: res.data,
        })
      })
  }

  render() {
    let { users } = this.state;
    let usersList = users.map((user) => {
      return (
        <div key={user.id} className='user-box'>
          <h3>Name: {user.name}</h3>
          <p>User: {user.username}</p>
          <span>Email: {user.email}</span>
        </div>
      )
    })
    return (
      <div>
        <h1>Blog</h1>
        <p>This is About Section</p>
        <div className='users'>
          {usersList}
        </div>
      </div>
    )
  }
}

export default Blog;