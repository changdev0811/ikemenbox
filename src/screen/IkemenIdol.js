import React, { Component } from 'react';
import MemberGrid from "./MemberGrid";
import Tabletop from 'tabletop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';


const styles = {
  box2:{
      padding: '0.5em 1em',
      margin: '2em 0',
      fontWeight: 'bold',
      color: '#6091d3',
      background: '#FFF',
      border: 'solid 3px #6091d3',
      borderRadius: '10px'
  },
  box2p:{
      margin: 0,
      padding: 0
  }
};

class IkemenIdol extends Component {

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


  displayMemberGrid(){


    let sheetnumber = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight' ];
    let targetGroup = [] ;

    if(this.state.data.length !== 0 ){

/*
      let i = 0;

      while(i < sheetnumber.length) {

        this['state']['data'][sheetnumber[i]]['elements'].filter((group) => {

          //console.log("group.group: ", group.group );
          //console.log("this.props.match.params.group: ", this.props.match.params.group );

          if (group.group == this.props.match.params.group){
              targetGroup.push(group);
              //console.log("group.group: ", group.group );
              //console.log("this.props.match.params.group: ", this.props.match.params.group );
          }

        });

        i = i + 1 ;
      }

      console.log("targetGroup: ", targetGroup );
*/

        return (
          <div>
          <Fade in={true} style={{ transitionDelay:'1000ms' }} >
          <Typography variant="h6" color="inherit" style={{textAlign:'center'}}>
            イケメン図鑑
          </Typography>
          </Fade>
          <Paper style={{ marginTop:30, paddingTop:30, border: 'double 12px #333' }} elevation={10}>
            <Fade in={true} style={{ transitionDelay:'1500ms' }} >
              <Typography variant="h6" color="inherit" style={{textAlign:'center'}}>
                {this.state.data.group.elements[0].groupname}
              </Typography>
            </Fade>
            <MemberGrid data={this.state.data.one.elements} group={this.state.data.group} groupname={this.state.data.group.elements[0].groupname} checked={true} />
          </Paper>
          <Paper style={{ marginTop:30, paddingTop:30, border: 'double 12px #333' }} elevation={10}>
          <Fade in={true} style={{ transitionDelay:'1500ms' }} >
            <Typography variant="h6" color="inherit" style={{textAlign:'center'}}>
              {this.state.data.group.elements[1].groupname}
            </Typography>
          </Fade>
            <MemberGrid data={this.state.data.two.elements} group={this.state.data.group} groupname={this.state.data.group.elements[1].groupname} checked={true} />
          </Paper>
          <Paper style={{ marginTop:30, paddingTop:30, border: 'double 12px #333' }} elevation={10}>
          <Fade in={true} style={{ transitionDelay:'1500ms' }} >
            <Typography variant="h6" color="inherit" style={{textAlign:'center'}}>
              {this.state.data.group.elements[2].groupname}
            </Typography>
          </Fade>
            <MemberGrid data={this.state.data.three.elements} group={this.state.data.group} groupname={this.state.data.group.elements[2].groupname} checked={true} />
          </Paper>
          <Paper style={{ marginTop:30, paddingTop:30, border: 'double 12px #333' }} elevation={10}>
          <Fade in={true} style={{ transitionDelay:'1500ms' }} >
            <Typography variant="h6" color="inherit" style={{textAlign:'center'}}>
              {this.state.data.group.elements[3].groupname}
            </Typography>
          </Fade>
            <MemberGrid data={this.state.data.four.elements} group={this.state.data.group} groupname={this.state.data.group.elements[3].groupname} checked={true} />
          </Paper>
          <Paper style={{ marginTop:30, paddingTop:30, border: 'double 12px #333' }} elevation={10}>
          <Fade in={true} style={{ transitionDelay:'1500ms' }} >
            <Typography variant="h6" color="inherit" style={{textAlign:'center'}}>
              {this.state.data.group.elements[4].groupname}
            </Typography>
          </Fade>
            <MemberGrid data={this.state.data.five.elements} group={this.state.data.group} groupname={this.state.data.group.elements[4].groupname} checked={true} />
          </Paper>
          <Paper style={{ marginTop:30, paddingTop:30, border: 'double 12px #333' }} elevation={10}>
          <Fade in={true} style={{ transitionDelay:'1500ms' }} >
            <Typography variant="h6" color="inherit" style={{textAlign:'center'}}>
              {this.state.data.group.elements[5].groupname}
            </Typography>
          </Fade>
            <MemberGrid data={this.state.data.six.elements} group={this.state.data.group} groupname={this.state.data.group.elements[5].groupname} checked={true} />
          </Paper>
          <Paper style={{ marginTop:30, paddingTop:30, border: 'double 12px #333' }} elevation={10}>
          <Fade in={true} style={{ transitionDelay:'1500ms' }} >
            <Typography variant="h6" color="inherit" style={{textAlign:'center'}}>
              {this.state.data.group.elements[6].groupname}
            </Typography>
          </Fade>
            <MemberGrid data={this.state.data.seven.elements} group={this.state.data.group} groupname={this.state.data.group.elements[6].groupname} checked={true} />
          </Paper>
          <Paper style={{ marginTop:30, paddingTop:30, border: 'double 12px #333' }} elevation={10}>
          <Fade in={true} style={{ transitionDelay:'1500ms' }} >
            <Typography variant="h6" color="inherit" style={{textAlign:'center'}}>
              {this.state.data.group.elements[7].groupname}
            </Typography>
          </Fade>
            <MemberGrid data={this.state.data.eight.elements} group={this.state.data.group} groupname={this.state.data.group.elements[7].groupname} checked={true} />
          </Paper>
          </div>
        );
    }
    else {
      return (<center><CircularProgress/></center>);
    }


  }

  render() {

    return (
        <div>
          {this.displayMemberGrid()}
        </div>
    );

  }
}

export default IkemenIdol;
