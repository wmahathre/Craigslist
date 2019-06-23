// Include folder is for files that reuse code
import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Category extends Component {
  constructor () {
    super()
    this.state = {
    // want to set state in the constructor method  
    }
  }

  render () {
      const {match, location, history} = this.props
        // create a variable for each one of these that ends up being equal to this.props.match/history/location
        // all of the information being passed down by property
    return (

        <div className ="category">
            <div className="container">
                this category is {match.params.category}
            
            
            </div>
            
        </div>

    )
  }

}