// Include folder is for files that reuse code
import React, { Component } from "react";
import ReactDOM from "react-dom";



export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      allImgs: '',
      currentImg: '',
      currentIndex: 0
    }
  }
  componentWillMount(){
        // this is a react lifecycle
    // https://cdn-images-1.medium.com/max/2400/1*sn-ftowp0_VVRbeUAFECMA.png
    
    const allImgs = [
      'https://images.craigslist.org/00i0i_kssik9syzby_600x450.jpg',
      'https://images.craigslist.org/00R0R_hZE323VRhYl_600x450.jpg',
      'https://images.craigslist.org/00O0O_bNjR7pbdOr_600x450.jpg',
      'https://images.craigslist.org/00K0K_gHelwWXchEc_600x450.jpg',
      'https://images.craigslist.org/00U0U_7rxCSfIQdZU_600x450.jpg',
      'https://images.craigslist.org/00h0h_11E9MlyvI1p_600x450.jpg'
    ]

    this.setState({
      allImgs ,
      currentImg: allImgs[this.state.currentIndex]
      // saying currentImg = allImgs[this.state.currentIndex]
    })
  }

  allImgsLoop = () => {
    // console.log(this.state.allImgs)
    return this.state.allImgs.map((item, i) => {
      return (
                      <div key={i} onClick={this.clickedThumb.bind(null, i)} className="thumb-img"
                      // cant pass the index this.clickThumbed() until you bind with null which not lets it get trigger and pass in i variable from 3 lines above
                      // i variable in (null, i) is the current index
                      // giving click actions to every single thumbnail so when we click on it it gimes the number of the index. and in the method on line 75 it gives the index number
                      // i is the key and clickThumb on line 75
                      style={{
                        // needs to { } to change to javascript and to use the style script
                        "backgroundImage":
                          `url('${item}')`
                          // url needed back tiks to work
                      }}> </div>
      )
    })
  }
  // Looping through the allImgs array and storing it into the "url" and returning them


nextBtn = () => {
  if(this.state.currentIndex != (this.state.allImgs.length -1)) {
  // If the current Index does not equal the last Index then the nextBtn will continue working. By the time it gets to 5 it can't go to index 6
  // Why put parantheses on the second this
  this.setState({
    currentIndex: this.state.currentIndex + 1
    // This is saying currentIndex = this.state.currentIdex + 1
    // So when you click the next button it will go from index 0 image to index 1
  })
}
}

prevBtn = () => {
  if(this.state.currentIndex != 0) {
    // Once the number gets to index zero then you can't minus a number and use it's button feature
  this.setState({
    currentIndex: this.state.currentIndex - 1
  })
} 
}

clickedThumb= (index) => {
  this.setState({
    currentIndex: index
  })
}

  render() {
    const { match, location, history } = this.props;
    // create a variable for each one of these that ends up being equal to this.props.match/history/location
    // all of the information being passed down by property
    return (
  
                <div className="gallery">
                  <div className="slider">
                    <div className="main-image">
                      <div className="arrows left-arrow" onClick={this.prevBtn}>{"<"}</div>
                      <div className="arrows right-arrow" onClick={this.nextBtn}>{">"}</div>
                      <div className="image-1"  style={{
                        // needs to { } to change to javascript and to use the style script
                        "backgroundImage":
                        `url(${this.state.allImgs[this.state.currentIndex]})`
                          // `url(${this.state.allImgs[0]})`
                          // shows the first image from allImgs
                      }}></div>

                    </div>
                  </div>

                  <div className="thumbnails">
                      {this.allImgsLoop()}
                    {/* <div
                      className="thumb-img"
                      style={{
                        // needs to { } to change to javascript and to use the style script
                        "backgroundImage":
                          "url('https://article.images.consumerreports.org/prod/content/dam/CRO%20Images%202019/Cars/January/CR-Cars-InlineHero-2019-Acura-ILX-A-Spec-f-1-19')"
                      }}/></div> */}
                  </div>
                </div>  // Code said this div was unreachable until "backgroundImage": was in quotations
         
             

             
    )
  }
}