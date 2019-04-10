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

import PersonScrollDialog from './PersonScrollDialog';

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
    paddingTop: '150%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});


function MemberList(props) {

  const { classes } = props;

  const people = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const ImageUrl = "https://lh3.googleusercontent.com/XkLSRTd46b0OJrJHw1zei1GNFAEp01XKaCaw5k7yNRFh9RF5DGHRgtmle5oK81cSD8mLPPFQJz7qIBylw7WzOlWmO6_XH8Ny20RLhU2yFs8_R8Hd8ephXOZPtdNqZX6ub-ywn_qQWGji1mnTBWrnoM6k57SxOL3Hx0ybkVS6T0n0ChZzRziiYjSYW-cl_fd9OzWR3YbE-XmoDnCd0e4wzGrLJbywhNBwQoc3ir3Qb530_3PJ4J3GkgDTklbnPG1b_lzaRrcoXmAAH6cf7CB5VT19FDkdMRqeRZuFcldWG2Va2FPMxIudce7Y6zQ2mSoTAVgeO9GSyxHqrToOwmzRn5VAqZYdQRwp0hwZ4RhSpABmUhhnT43abSKsZuj3fz0RsxV9Bhf--eIzt5vCqjgFfG6rGkCK7qD4sfmjKrXLrdCm8YFXpklxqscpqu8mSZB8Fp0xPBab6RUGYVszQIXLQq2ZiCb6ev4cUiTzi90CFoARLRuYXd2PiC82fi5Toi_zuQkAtZLhg26gidRYg5OTef6iDNUHhR6H2YTv1meLOob4uXbxvXOsaVO00YdjObZBQmP8uU3yKFDHm3BJSLCfAko_jMpTkNONzPXfbZngZeYs2RdkXJpqVAoK6rEejEdaYVPmOUmoHRio38EXsClTZQdEKDCzfFq8QORMzKR4dWqYXE39-ck0ZMjDHsceZH2sjM3Qjysa7b8_Yi5Z=w398-h596-no";

  const Name = "小澤廉";

  console.log("props in MemberList: ", props );

  return (
    <React.Fragment>
      <CssBaseline />
      <main>

        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {people.map(card => (
              <Grid item key={card} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={ImageUrl}
                    title={Name}
                  />
                  <CardContent className={classes.cardContent}>
                    <PersonScrollDialog/>
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

MemberList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MemberList);
