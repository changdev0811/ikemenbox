import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";


class MemberCarousel extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

    console.log("this.props in MemberCarousel", this.props);

    return(
      <Carousel showArrows={true} showThumbs={true} swipeable={true} >
        <div>
          <img src={this.props.props.photo} />
        </div>
        <div>
          <img src={this.props.props.photo} />
        </div>
        <div>
          <img src={this.props.props.photo} />
        </div>
      </Carousel>
    )

  }

}

export default MemberCarousel;
