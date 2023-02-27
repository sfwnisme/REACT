import React, { Component } from 'react'
import axios from 'axios'

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
    return (
      <div>
        <h1>Blog</h1>
        <p>This is About Section</p>
        <div>
          {this.state.users.forEach((user) => <div key={user.name}>{user.name} => and his username is {user.username}</div>)}
        </div>
      </div>
    )
  }
}

export default Blog;