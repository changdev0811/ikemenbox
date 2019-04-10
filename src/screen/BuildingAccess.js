import React, { Component } from 'react';
import Iframe from 'react-iframe';

class BuildingAccess extends Component {

  constructor() {
    super()
    this.state = {
    }

  }

  componentDidMount() {
  }

  render() {

    return (
        <div>
        〒170-0013 東京都豊島区東池袋１丁目２−９
        <br/>
        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.844177393832!2d139.71162191526005!3d35.73005058018294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d67cc1d59eb%3A0x3458999c13bdb354!2z44CSMTcwLTAwMTMg5p2x5Lqs6YO96LGK5bO25Yy65p2x5rGg6KKL77yR5LiB55uu77yS4oiS77yZ!5e0!3m2!1sja!2sjp!4v1544341051078"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen/>
        </div>
    );

  }
}

export default BuildingAccess;
