import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

class BuildingSns extends Component {

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
          <center>
            <br/>
            <SocialIcon url="https://twitter.com/ikemen_AK" network="twitter" style={{ height: 100, width: 100 }} />
            <br/>
            <br/>
            <SocialIcon url="https://www.instagram.com/ikemen_ak/?hl=ja" network="instagram" style={{ height: 100, width: 100 }} />
            <br/>
            <br/>
          </center>
        </div>
    );

  }
}

export default BuildingSns;
