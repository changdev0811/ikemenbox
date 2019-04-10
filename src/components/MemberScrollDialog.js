import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { SocialIcon } from 'react-social-icons';

import MemberCarousel from "./MemberCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Slide from '@material-ui/core/Slide';
import Zoom from '@material-ui/core/Zoom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


export function dialogOpen() {
  this.handleClickOpen('body');
}

function Transition(props) {
  return <Slide direction="down" {...props} />;
  //return <Zoom in={true} style={{ transitionDelay: '1000ms' }} />

}

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


class MemberScrollDialog extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      scroll: 'paper',
    };

    console.log("this.props in MemberList: ", this.props );

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


  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {

    //console.log("this.props.name in MemberScrollDialog: ", this.props.props.name);

    return (
      <div>
        {/*<Button onClick={this.handleClickOpen('paper')}>scroll=paper</Button>*/}
        <center>
          <Button onClick={this.handleClickOpen('body')} style={{ textTransform: 'none' , fontSize: 'medium' }}>{this.props.props.name}</Button>
        </center>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">{this.props.props.name}</DialogTitle>
          <DialogContent>

          <Zoom in={true} style={{ transitionDelay: '500ms' }}>
            <Card>
              <CardMedia
                component="a"
                rel="noopener nofollow"
                style={{ paddingTop: this.changePaddingTop(this.props.props.group) }}
                image={this.props.props.photo}
                title={this.props.props.name}
                data-ga-event-category="premium-themes"
                data-ga-event-action="click"
                data-ga-event-label={this.props.props.name}
              />
            </Card>
          </Zoom>

            <DialogContentText>

            <Zoom in={true} style={{ transitionDelay: '1000ms' }}>

            <Grid container alignItems="center">
              <Grid item xs>
                <List>
                <ListItem>
                  <ListItemText primary="名前" />
                  <ListItemText primary={this.props.props.name} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="名前（英語）" />
                  <ListItemText primary={this.props.props.name_en} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="出身" />
                  <ListItemText primary={this.props.props.address} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="血液型" />
                  <ListItemText primary={this.props.props.bloodtype} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="担当カラー" />
                  <ListItemText primary={this.props.props.color} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="身長" />
                  <ListItemText primary={this.props.props.height} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="体重" />
                  <ListItemText primary={this.props.props.weight} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="グループ名" />
                  <ListItemText primary={this.props.props.group} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="SNS" />
                  <SocialIcon url={this.props.props.twitter} network="twitter" style={{ height: 50, width: 50 }} />
                </ListItem>
                <Divider />
                </List>
              </Grid>
            </Grid>

            </Zoom>

            </DialogContentText>

          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              閉じる
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default MemberScrollDialog;
