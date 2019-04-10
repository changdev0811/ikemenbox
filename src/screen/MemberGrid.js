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
import MemberScrollDialog from '../components/MemberScrollDialog';
import { dialogOpen } from '../components/MemberScrollDialog';


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

class MemberGrid extends React.Component {

  constructor(props) {
    super(props);
    console.log("props: ", props );
    this.state = {
      open: false,
      scroll: 'paper',
      modal: false
    };

  }

  selectMember(index){
    console.log("selectMember index: ", index );

    let url = "/ikemen-idol/" + this.props.groupname + "/" + this.props.data[index].name_en ;
    console.log("path: ", url);

    this.props.history.push({
      pathname: url,
    });

  }

  dialogOpenFunc(){
    console.log("open");
    this.setState({ modal : true });
  }

  changePaddingTop(groupname){

    //console.log("groupname: ", groupname);

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

  const { classes } = this.props;

  return (
    <Grid container spacing={16}>
      {this.props.data.map((theme , index) => (
        <Grid key={theme.name} item xs={6} md={3}>
        <Zoom in={this.props.checked} style={{ transitionDelay: this.props.checked ? (index*100)+'ms' : '0ms' }}>

          {/*<Avatar alt={theme.name} src={theme.groupphoto} href="/ikemen-idol" style={{ margin: 'auto' , width: 200, height: 200 }}/>*/}

          <Card className={classes.card}>
            <CardMedia
              component="a"
              rel="noopener nofollow"
              className={classes.media}
              style={{ paddingTop: this.changePaddingTop(this.props.groupname) }}
              image={theme.photo}
              title={theme.name}
              data-ga-event-category="premium-themes"
              data-ga-event-action="click"
              data-ga-event-label={theme.name}
              onClick={() => this.dialogOpenFunc()}
            />
            <CardContent className={classes.cardContent}>
              <Grid container alignItems="center">
                <Grid item xs>
                  <MemberScrollDialog props={theme} group={this.props.group} />
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

MemberGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(MemberGrid));
