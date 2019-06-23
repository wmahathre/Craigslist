// Include folder is for files that reuse code
import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe',
      categoriesData: ''
      // needs to be a string to use map method
      // when they send the response back we want to send it to the state
    }
  }
  
  componentWillMount(){
    const self = this;
    // this = class
    axios.get('/api/categories')
    // before the component loads do a axios call to the url and data
    .then(function (response) {
        // when it comes back from the promise (gets data don't know how long it will take) then run the function. 
         // handle success
        // when they send the response back we want to send it to the state
        self.setState({
            categoriesData: response.data
        // })
    //   console.log(response.data);
    //   function brings the response data
    }, () => {
        // pass in a callback which is just a function.
        console.log(self.state)
        // To see what's inside of the state
    })

})
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  }
  
  clickedBtn = () => {
    console.log('swag')
  }


// the state categoriesData needed to be a string so the map would have something inside of it instead of an object{}
// had to go to the server and get the data. Once the data comes back from the promise then it became an array of different objects inside of it
  loopCategories = () =>{
    if(this.state.categoriesData != ''){
        // if statement for the data.
        return this.state.categoriesData.map((category, i) => {
            // return a loop of categories
            // create another function inside of this function
            const loopListings = () => {
                // created a loop for the listings
                return category.listings.map((listing, index) => {
                    return (
                        <a href={`${category.title}/${listing.slug}`} className="link" key={index}>
                        {listing.name}
                        </a>
                    )
                })
            }
            return (
                <div className="categories" key={i}>
                {/* Each child in an array or iterator should have a unique "key" prop */}
                <div className="title">{category.title}</div>
                <div className={`group-links ${(category.title == 'jobs' || category.title == 'personal' || category.title == 'housing')? 'single-col': ''}`}>
                {/* Everytime it loops if the category.title equals to these three then it will use single-col css  */}
                {/* This is tertiary if statement in one single line. question mark ? is saying if condition is true add the single-col and the colon : says if condtion is false add empty strings */}


                {/* <a href="#" className="link">Community</a>
                <a href="#" className="link">General</a>
                <a href="#" className="link">Activities</a>
                <a href="#" className="link">Groups</a>
                <a href="#" className="link">Artists</a>
                <a href="#" className="link">Local News</a>
                <a href="#" className="link">Child Care</a>
                <a href="#" className="link">Lost & Found</a>
                <a href="#" className="link">Classes</a>
                <a href="#" className="link">Musician</a>
                <a href="#" className="link">Events</a>
                <a href="#" className="link">Pets</a> */}
                {loopListings()}
                </div>
            </div>
            )
        })
    } else {
    return 'Loading';
}

  }

  loopTags = () => {
      let testTags = ["a","b","c","d","e"]
    //   Need to put letters in strings it doesn't think it's variables
      return testTags.map((item) => {
        //   Each child in an array or iterator should have a unique "key" prop
        return(<div key={item} className="tag">Apple Macbook</div>)
        // Each child in an array or iterator should have a unique "key" prop
      })
  }

  render () {
    return (

        <div className ="home">
           <div className= "container">
            <h1>Connecting People <br/> Everywhere :) </h1>
            <section className="links">
                {this.loopCategories()}
            </section>
                <section className={"trending"}>
                    <input type="text" name="search " className="search" />
                    <div className="title">
                    <i className="far fa-clock"></i> Trending Now 
                    </div>
                    <div>
                        <div className="trending-tags">
                            {this.loopTags()}
                        </div>
                    </div>
                </section>
                </div>
                {/* <div className="categories">
                    <div className="title">Community</div>
                    <div className="group-section">
                    <a href="#" className="link">Community</a>
                    <a href="#" className="link">General</a>
                    <a href="#" className="link">Activities</a>
                    <a href="#" className="link">Groups</a>
                    <a href="#" className="link">Artists</a>
                    <a href="#" className="link">Local News</a>
                    <a href="#" className="link">Child Care</a>
                    <a href="#" className="link">Lost & Found</a>
                    <a href="#" className="link">Classes</a>
                    <a href="#" className="link">Musician</a>
                    <a href="#" className="link">Events</a>
                    <a href="#" className="link">Pets</a>
                    </div>
                </div> */}
            
        </div>

    )
  }
}