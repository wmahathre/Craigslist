// Include folder is for files that reuse code
import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
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
      <div className="container">
  <header>
      <div className={'left-menu'}>
        <div className={'logo'}>Craigslist</div>
        <div className={'city'}>New York <i className={`fas fa-chevron-down`}></i> </div>
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