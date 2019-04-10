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
import { SocialIcon } from 'react-social-icons';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

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

class MemberDetail extends React.Component {

  constructor(props) {
    super(props);
    console.log("props: ", props );
  }

  changePaddingTop(groupname){
    if(groupname == this.props.group.elements[0].groupname){
      return '120%';
    }
    else if (groupname == this.props.group.elements[1].groupname) {
      return '100%';
    }
    else if (groupname == this.props.group.elements[2].groupname) {
      return '250%';
    }
    else if (groupname == this.props.group.elements[3].groupname) {
      return '100%';
    }
    else if (groupname == this.props.group.elements[4].groupname) {
      return '100%';
    }
    else if (groupname == this.props.group.elements[5].groupname) {
      return '100%';
    }
    else if (groupname == this.props.group.elements[6].groupname) {
      return '100%';
    }
    else {
      return '100%';
    }
  }

  render(){

    console.log("props: ", this.props );

    const { classes } = this.props;

    return (

      <div>
      {/*
      <Grid container spacing={16}>
          <Grid key={this.props.data.name} item xs={12} md={6}>
      */}
          <Zoom in={true} style={{ transitionDelay: '500ms' }}>
            <Card>
              <CardMedia
                component="a"
                rel="noopener nofollow"
                className={classes.media}
                style={{ paddingTop: this.changePaddingTop(this.props.groupname) }}
                image={this.props.data.photo}
                title={this.props.data.name}
                data-ga-event-category="premium-themes"
                data-ga-event-action="click"
                data-ga-event-label={this.props.data.name}
              />
              <CardContent className={classes.cardContent}>
                <Grid container alignItems="center">
                  <Grid item xs>
                    <List>
                    <ListItem>
                      <ListItemText primary="名前" />
                      <ListItemText primary={this.props.data.name} />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText primary="名前（英語）" />
                      <ListItemText primary={this.props.data.name_en} />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText primary="出身" />
                      <ListItemText primary={this.props.data.address} />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText primary="血液型" />
                      <ListItemText primary={this.props.data.bloodtype} />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText primary="担当カラー" />
                      <ListItemText primary={this.props.data.color} />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText primary="身長" />
                      <ListItemText primary={this.props.data.height} />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText primary="体重" />
                      <ListItemText primary={this.props.data.weight} />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText primary="グループ名" />
                      <ListItemText primary={this.props.data.group} />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText primary="SNS" />
                      <SocialIcon url={this.props.data.twitter} network="twitter" style={{ height: 50, width: 50 }} />
                    </ListItem>
                    <Divider />
                    </List>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            </Zoom>
            {/*
          </Grid>
      </Grid>
      */}
      </div>

    );
  }

}

MemberDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MemberDetail);
