import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

class BuildingOpening extends Component {

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
          <Fade in={true} >
          <center>
          <br/>
          <Typography variant="h4" color="inherit">
              全日11:00～22:00
          </Typography>
          <br/>
            <Typography variant="h6" color="inherit">
                ※ライブスケジュール・イベント等で変更あり
            </Typography>
          <br/>
          </center>
          </Fade>
        </div>
    );

  }
}

export default BuildingOpening;
