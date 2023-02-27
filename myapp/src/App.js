'use strict';
import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'


import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/blog' element={<Blog />} />
          </Routes>
          {/* <Route path='/about' component={About} /> */}
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

