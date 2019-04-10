import React, { Component } from 'react';
import MemberDetail from "./MemberDetail";
import Tabletop from 'tabletop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

class IkemenIdolMemberDetail extends Component {

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
    let targetMember = [] ;

    if(this.state.data.length !== 0){

      console.log("this.state.data: ", this.state.data );

      let i = 0;

      while(i < sheetnumber.length) {

        this['state']['data'][sheetnumber[i]]['elements'].filter((group) => {

          if (group.group == this.props.match.params.group){

            if (group.name_en == this.props.match.params.member){
              console.log("group.group: ", group.name_en );
              console.log("this.props.match.params.member: ", this.props.match.params.member );
              targetMember.push(group);
            }

          }

        });

        i = i + 1 ;
      }

      console.log("targetMember: ", targetMember);

      return (
          <div>
          <Fade in={true} style={{ transitionDelay:'1000ms' }} >
          <Typography variant="h6" color="inherit" style={{textAlign:'center'}}>
            {this.props.match.params.group} : {this.props.match.params.member}
          </Typography>
          </Fade>
            <div style={{margin:'auto'}}><MemberDetail data={targetMember[0]} group={this.state.data.group} groupname={this.props.match.params.group} membername={this.props.match.params.member} checked={true} /></div>
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

export default IkemenIdolMemberDetail;
