// Include folder is for files that reuse code
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Gallery from './components/Gallery.js'



export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      // want to set state in the constructor method
    };
  }

  render() {
    const { match, location, history } = this.props;
    // create a variable for each one of these that ends up being equal to this.props.match/history/location
    // all of the information being passed down by property
    return (
      <div className="details-page">
        <div className="container">
          <div className="white-box">
            <section className="submenu">
              {/* This is going to be at the top of the page */}
              <div className="direction">
                <a href="#" className="prev">
                  Prev
                </a>
                <a href="#" className="next">
                  next
                </a>
              </div>

              <nav className="sub-links">
                <a href="#">More Ads by User</a>
                <a href="#">Print</a>
                <a href="#">Share</a>
                <a href="#">Contact seller</a>
              </nav>
            </section>

            <section className="content-area">
              <div className="left media-column">
                <Gallery />
              </div>

              <div className="right details-column">
                <div className="date">Posted: July 2nd </div>
                <h3 className="title">2007 Volvo XC90</h3>
                <h4 className="price">$3950</h4>
                <div className="more-details">
                  <div className="Info">
                    <label>Vin</label>
                    <h5>DJNDAOJGSNF</h5>
                  </div>
                  <div className="Info">
                    <label>Mileage</label>
                    <h5>189,000</h5>
                  </div>
                  <div className="Info">
                    <label>Transmission</label>
                    <h5>Manual</h5>
                  </div>
                </div>
                <div className="description">
                  <label>Description</label>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
