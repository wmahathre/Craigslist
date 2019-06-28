import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './includes/Header.js'
import Home from './pages/Home.js'
import Listing from './pages/Listing.js'
import DEtails from './pages/Details.js'
import CAtegory from './pages/Category.js'
// import and export default are part of ES6 modules system
// import package or file to a variable from the path
// import is a namespace. Namespacing does for functions and classes what scope does for variables. It allows you to use the same function or class name in different parts of the same program without causing a name collision.


export default class App extends Component {
// Use export default so there can only be one default export from a file 
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
    <Router>     
    <div>
      {/* :city allows the header to see and match the city params */}
      <Route path="/:city" component={Header} />
      {/* Doesnt have exact b/c we want it to show everywhere on the page that has a root / */}
      <Route exact path="/" component={Home} />
      <Route exact path="/:city" component={Home} />
      <Route exact path="/:city/:category" component={CAtegory} />
      <Route exact path="/:city/:category/:listings" component={Listing} />
      {/* This is where we want the Home component to show up */}
      {/* React router gets passed down as a property so it means you can use it anywhere in the component. */}
      {/* : is a param that is used in Listing.js    City: {match.params.city} */}
      {/* <Home/> */}
      <Route exact path="/:city/:category/:listings/:item" component={DEtails} />
    </div>
    </Router>
    )
  }
}


