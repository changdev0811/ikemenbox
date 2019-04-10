import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Zoom from '@material-ui/core/Zoom';
import Tabletop from 'tabletop';
import CircularProgress from '@material-ui/core/CircularProgress';

import GroupBox from './GroupBox';


const styles = {
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1
  },
  media: {
    paddingTop: '100%'
  },
};


class EventDetail extends React.Component {

  constructor(props) {
    super(props);
    console.log("props: ", props );

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




  render(){

    console.log("props: ", this.props );

    let targetGroup = [] ;
    let groupindex = "";

    if(this.state.data.length !== 0 ){

      this['state']['data']['group']['elements'].filter((group, index) => {

        console.log("group: ", group );

        if (group.groupname == this.props.match.params.group){
            targetGroup.push(group);
            groupindex = index ;
            console.log("group: ", group );
        }

      });

    console.log("targetGroup: ", targetGroup );


    const { classes } = this.props;

    return (

      <div>

          <div>{this.props.match.params.group}のイベントはこちら</div>
          <GroupBox groupdata={targetGroup[0]} groupname={this.props.match.params.group} groupindex={groupindex} checked={true} />

          <center>
          <Button variant="contained" color="secondary" style={{ width:'30vh' }} >
          予約する
          </Button>
          </center>

      </div>

    );

  }
  else {
    return (<center><CircularProgress/></center>);
  }



  }

}

EventDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventDetail);
