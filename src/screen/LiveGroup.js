import React, { Component } from 'react';
import PersonList from '../components/PersonList.js';
import GroupGrid from "./GroupGrid";
import Tabletop from 'tabletop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';


class LiveGroup extends Component {

  constructor() {
    super()
    this.state = {
      data: []
    }

  }

  componentDidMount() {

    Tabletop.init({
      key: '1pgMF2JtQ0vrUSPoIBeLaNESF3Y2w8SqZX6tTrRq1-ys',
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: false
    });
  }

  render() {

    return (
        <div>
        <Fade in={true} style={{ transitionDelay:'1000ms' }} >
          <Typography variant="h6" color="inherit" style={{textAlign:'center'}}>
              グループ一覧
          </Typography>
        </Fade>
        { this.state.data.length != 0 ? <GroupGrid data={this.state.data} checked={true} /> : <center><CircularProgress/></center> }
        </div>
    );

  }
}

export default LiveGroup;
