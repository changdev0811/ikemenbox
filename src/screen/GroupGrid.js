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
import GroupToMember from './GroupToMember';
import { withRouter } from 'react-router';

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
    paddingTop: '35%'
  },
};

class GroupGrid extends React.Component {

  constructor(props){
    super(props);
    console.log("props: ", props );
  }

  selectGroup(index){
    console.log("selectCard index: ", index );

    let url = "/ikemen-idol/" + this.props.data.group.elements[index].groupname ;
    console.log("path: ", url);

    this.props.history.push({
      pathname: url
    });

  }

  changePaddingTop(index){

    console.log("index: ", index);

    if(index === 0){
      return '40%';
    }
    else if (index === 1) {
      return '120%';
    }
    else if (index === 2) {
      return '100%';
    }
    else if (index === 3) {
      return '100%';
    }
    else if (index === 4) {
      return '100%';
    }
    else if (index === 5) {
      return '60%';
    }
    else if (index === 6) {
      return '100%';
    }
    else {
      return '90%';
    }
  }

  render(){

    const { classes } = this.props;

    return (
      <Grid container spacing={16}>
        {this.props.data.group.elements.map((theme , index) => (
          <Grid key={theme.name} item xs={12} md={3}>
          <Zoom in={this.props.checked} style={{ transitionDelay: this.props.checked ? (index*100)+'ms' : '0ms' }}>

            {/*<Avatar alt={theme.name} src={theme.groupphoto} href="/ikemen-idol" style={{ margin: 'auto' , width: 200, height: 200 }}/>*/}

            <Card className={classes.card}>
              <CardMedia
                component="a"
                rel="noopener nofollow"
                className={classes.media}
                style={{ paddingTop: this.changePaddingTop(index) }}
                image={theme.groupphoto}
                title={theme.groupname}
                data-ga-event-category="premium-themes"
                data-ga-event-action="click"
                data-ga-event-label={theme.groupname}
                onClick={() => { this.selectGroup(index); }}
              />
              <CardContent className={classes.cardContent}>
                <Grid container alignItems="center">
                  <Grid item xs>
                    <Typography gutterBottom align="center">
                    {theme.groupname}
                    </Typography>
                    <Typography gutterBottom align="center">
                    {theme.concept}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>


            </Zoom>
          </Grid>
        ))}
      </Grid>
    );
  }

}

GroupGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(GroupGrid));
