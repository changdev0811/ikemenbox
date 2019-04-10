import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { TwitterShareButton, TwitterIcon } from 'react-share';
import { SocialIcon } from 'react-social-icons';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop:'100%',
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

class GroupAlbum extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  clickButton = (groupname) => {
      console.log("groupname in clickButton: ", groupname );
      return this.props.dataHoge(groupname);
  }


  render() {

    console.log("this.props in GroupAlbum : ", this.props );

    const { classes } = this.props;

    console.log("classes: ", classes );

    const { groupmembers } = this.props;

    console.log("groupmembers: ", groupmembers );

      return (
        <React.Fragment>
          <CssBaseline />
          <main>

            <div className={classNames(classes.layout, classes.cardGrid)}>
              {/* End hero unit */}
              <Grid container spacing={40}>
                {this.props.props.elements.map(card => (
                  <Grid item key={card} sm={6} md={4} lg={3}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={card.groupphoto}
                        title={card.groupname}
                      />
                      <CardContent className={classes.cardContent}>
                        <center>
                        {/*
                        <Typography gutterBottom variant="h5" component="h2">
                          {card.groupname}
                        </Typography>
                        */}
                        <Button onClick={() => { this.clickButton(card.groupname); }} style={{ textTransform: 'none' , fontSize: 'medium' }}>{card.groupname}</Button>
                        </center>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          </main>
        </React.Fragment>
      );
    }

}

GroupAlbum.propTypes = {
  classes: PropTypes.object.isRequired,
  dataHoge: PropTypes.func,
};

export default withStyles(styles)(GroupAlbum);
