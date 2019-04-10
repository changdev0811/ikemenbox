import React, { Component } from 'react';

class PointBarcode extends Component {

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
        『IKEMENビル（池袋AKビル）』の会員になるとお得な特典がいっぱい！＼(^o^)／<br/>
        <br/>
        下記から空メール登録をしよう。(無料)<br/>
        <br/>
        <a href="mailto:3527@p-kc.jp">空メール登録はこちら</a><br/>
        <br/>
        QRコードはこちら<br/>
        <img src={require('../image/3527.jpg')} />
        </center>

        </div>
    );

  }
}

export default PointBarcode;
