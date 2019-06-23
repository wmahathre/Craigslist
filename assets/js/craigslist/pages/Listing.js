// Include folder is for files that reuse code
import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
    // want to set state in the constructor method  
    }
  }

  loopItems = () =>{
    let testArray = [1,2,3,4,5,6,7]
    return testArray.map((item) => {
        // Each child in an array or iterator should have a unique "key" prop
        return (
            <div className="item">
            <div className="image">
            {/* Inside of the image we have a price so there's a div inside of it  */}
                <div className="price">
                $8900
                </div>
            image
            {/* image of car is on _listing.scss under .image */}
            </div>
        <div className="details">
            <i className="far fa-star"></i>
            {/* Remember to change class to className */}
            <h5>2013 Acura ILX</h5>
            <h6>Ridgewood</h6>
        </div>                     
        </div>
        )
    })
  }

  render () {
      const {match, location, history} = this.props
        // create a variable for each one of these that ends up being equal to this.props.match/history/location
        // all of the information being passed down by property
    return (

        <div className ="listings-page">
            <div className="container">
            <section id="filter">
                  <div className="form-group price">
                    <label> 
                        Price
                    </label>
                    <div className="min-max">
                    {/* The <label> tag defines a label for a <button>, <input>, <meter>, <output>, <progress>, <select>, or <textarea> element. */}
                    <select name="min-price" className="min-price">
                        <option value="0">0</option>
                        {/* The <select> element is used to create a drop-down list.
                        The <option> tags inside the <select> element define the available options in the list. */}
                    </select>
                    <select name="max-price" className="max-price">
                        <option value="1000">10000</option>
                    </select>
                   </div> 
                   </div>
                   <div className="form-group make">
                        <label>Make</label>
                        <select name="make" className="make">
                            <option value="bmw">Acura</option>
                    </select>
                    </div>
                    
                    <div className="form-group model">
                        <label>Model</label>
                        <select name="model" className="model">
                            <option value="bmw">ILX</option>
                    </select>
                    </div>
                    {/* <div className="form-miles">
                        <label>Miles from zip</label>
                        <select name="miles" classname="miles">
                            <option value="bmw">bmw</option>
                    </select>
                    </div> */}
                    < div className="form-group button">
                        <div className="primary-btn">Update</div>
                        <div className="reset-btn">Reset</div>
                    </div>
                  
                </section>
                </div>
                <section id="list-view">
                  <div className="container">
                    <div className="white-box">
                    {/* put a white box inside the list-view to adjust its padding inside without the grey color */}
                    <section className="change-view">
                        <div className="form-group view-dropdown">
                            <select name="select-view" className="select-view">
                                <option value="gallery">Gallery View</option>
                                <option value="list">List View</option>
                                <option value="thumb">Thumb View</option>
                            </select>
                        </div>
                        <div className="form-group sort-dropdown">
                            <select name="sort-dropdown" className="sort-dropdown">
                                <option value="gallery">Newest</option>
                            </select>
                        </div>
                    </section>
                    <section className="all-items">
                        {this.loopItems()}
                    </section>
                    </div>
                    </div>
                </section>
            City: {match.params.city}
            {/* names the city from the url http://localhost:5000/nyc/category/listings */}
            {/* city came from App.js      <Route exact path="/:city/:category/:listings" component={Listing} /> */}

            Category: {match.params.category}
            Listings: {match.params.listings}

            {/* items: {match.params.item}   This is in Item.js */ }
            
            
            </div>
            
      

    )
  }
}