import React, { Component } from 'react';
import MemberGrid from "./MemberGrid";
import Tabletop from 'tabletop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

class IkemenIdolMember extends Component {

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


        return (
          <div>
          <Fade in={true} style={{ transitionDelay:'1000ms' }} >
          <Typography variant="h6" color="inherit" style={{textAlign:'center'}}>
            {this.props.match.params.group}
          </Typography>
          </Fade>
            <MemberGrid data={targetGroup} group={this.state.data.group} groupname={this.props.match.params.group} checked={true} />
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

export default IkemenIdolMember;
