// Include folder is for files that reuse code
import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe',
      cityDropdown: false,
      // if its false it's not going to show the dropdown
      selectedCity: 'New York City',
      // this is the default
      citiesData: []
    }
  }

  componentWillMount() {
    // before the component header shows up we want to get this data
    const self = this;
    // this = class
    axios.get(`/api/cities`)
    // api/city gives all the categories for that city so basically everything on the homepage.
    .then(function (response) {
      // Also wants to change the URL of the city that is selected depending on the slug you choose.
      const {match, history} = self.props
      let city = response.data.filter((item) => {
        return item.title == match.params.city
        // when citiesData.title = selectedCity return it. Uses the server.js Header :city to match it
      })
      
      // when it comes back from the promise (gets data don't know how long it will take) then run the function. 
        // when they send the response back we want to send it to the state
        self.setState({
            citiesData: response.data,
            selectedCity: city[0].title
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

  selectCity = (city) => {
    this.setState({
      selectedCity: city   
    })
  }
  loopCities = () => {
    const self = this;
    return this.state.citiesData.map((item, i) => {
      return(
        <li key={i} 
        onClick={this.selectCity.bind(null, item.title)}>{item.title}</li>
       // When you click the city drop down and scroll and select another city it will display that as the new city
      )
    })
  }

  clickedCityDropdown = () => {
    this.setState({
      cityDropdown: !this.state.cityDropdown
      // whatever this state is make it the opposite which is true so when true it will drop down the menu
    }, () => {
      // once this change we also want it to do this
      let city = this.state.citiesData.filter((item) => {
        return item.title == this.state.selectedCity
        // when citiesData.title = selectedCity return it
      })
      const {match, history} = this.props
      history.push(`/${city[0].slug}`)
      // 
    })
  }
  render () {
    return (
      <div className="container">
  <header>
      <div className={'left-menu'}>
        <div className={'logo'}>Craigslist</div>
        <div className={'city-dropdown'}
         onClick={this.clickedCityDropdown}> 
         {this.state.selectedCity}
         {/* shows the city and also makes it clickable since its part of the city-dropdown class */}
        <i className={`fas fa-chevron-down
        ${(this.state.cityDropdown) ?
         'fa-chevron-up':'fa-chevron-down'}`}></i>
        <div className={`scroll-area ${(this.state.cityDropdown) ? 'active':''}`}>
        {/* The active selctor becomes active when you click on it. */}
        {/* put a tertiary or if statement inside a className */}
          <ul>
            {this.loopCities()}
            {/* <li>New York City</li>
            <li>New York City</li> */}
          </ul>
        </div>
         </div>
      </div>  
      {/* could use javascript "" since its javascript */}

      <div className={'right-menu'}>
        <div className={'user-img'}>img</div>
        <div className={'user-dropdown'}>my account <i className={`fas fa-chevron-down`}></i> </div>
        <div className={'post-btn'}>post to classifieds</div>
      </div> 
      
      
      {/* // In react for class you need to use className since JS already has class as a keyword */}
    </header>
    </div>
    )
  }
}