import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Avatar from '@material-ui/core/Avatar';
import { withRouter } from 'react-router';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

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
    paddingTop: '55%'
  },
};

class GroupToMember {

  constructor(props){
    console.log("props: ", props );
  }

  selectCard(card) {

    console.log("selectCard in Home: ", card );

    /*
    let url = "/user/:" + card.id ;
    console.log("path: ", url);

    this.props.history.push({
      pathname: url,
      card:card,
      likestatus:likestatus,
      talkstatus:talkstatus,
      userid:userid,
    });
    */

  }

  render(){
    return(
      <div></div>
    );
  }

}

GroupToMember.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(GroupToMember));
