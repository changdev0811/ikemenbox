import React, { Fragment } from 'react';
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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListSubheader from '@material-ui/core/ListSubheader';


const styles = {
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardContent: {
    flexGrow: 1
  },
  media: {
    paddingTop: '100%'
  },
  root: {
    width: '100%',
    maxWidth: 360
  },
  inline: {
    display: 'inline',
  }
};

class EventCard extends React.Component {

  constructor(props) {
    super(props);
    console.log("props: ", props );
  }

  selectMember(index){
    console.log("selectMember index: ", index );

    let url = "/event/" + this.props.month + "/" + this.props.data[index].name_en ;
    console.log("path: ", url);

    this.props.history.push({
      pathname: url,
    });

  }


  render(){

  const { classes } = this.props;

  return (
    <List>
    <Fragment>
      <ListSubheader>{this.props.month}月の生誕祭</ListSubheader>
      {this.props.data.map((theme , index) => (
        <Zoom in={this.props.checked} style={{ transitionDelay: this.props.checked ? (index*100)+'ms' : '0ms' }}>

        {/*
          <ListItem alignItems="flex-start" button >
            <ListItemAvatar>
            <Avatar alt={theme.name} src={theme.photo} />
            </ListItemAvatar>
            <ListItemText
              primary={theme.name}
              secondary={
                <React.Fragment>
                  <Typography component="span" color="textPrimary">
                    {theme.group}
                  </Typography>
                  {theme.birthday}
                </React.Fragment>
              }
            />
          </ListItem>
        */}

        </Zoom>
      ))}
      </Fragment>
      </List>

  );
}

}

EventCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(EventCard));
