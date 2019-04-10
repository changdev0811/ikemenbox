import React, { Component } from 'react';
import EventGrid from "./EventGrid";
import Tabletop from 'tabletop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import InfiniteScroll from 'react-infinite-scroller';

class StageSchedule extends Component {

  constructor(props) {
    super(props);

    console.log("props: ", props );

    this.state = {
      data: [],
      event: {},
      tracks: [],
      hasMoreItems: true,
      nextHref: null,
      month: ""
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

  displayMemberGrid(month){

    let sheetnumber = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight' ];
    let targetGroup = [] ;

    if(this.state.data.length !== 0 ){

      let i = 0;

      while(i < sheetnumber.length) {

        this['state']['data'][sheetnumber[i]]['elements'].filter((group) => {

          //console.log("group: ", group );
          //console.log("this.props.match.params.group: ", this.props.match.params.group );

          //console.log("new Date(group.birthday): ", new Date(group.birthday) );
          //console.log("new Date(group.birthday).getMonth()+1: ", new Date(group.birthday).getMonth()+1 );

          if (new Date(group.birthday).getMonth()+1 == month){
              targetGroup.push(group);
              //console.log("group.group: ", group.group );
              //console.log("this.props.match.params.group: ", this.props.match.params.group );
          }

        });

        i = i + 1 ;
      }

      //console.log("targetGroup before sort: ", targetGroup );

      targetGroup.sort((a,b) => {
        //console.log("a:", a.birthday);
        //console.log("b:", b.birthday);
        return (new Date(a.birthday) > new Date(b.birthday) ? 1 : -1);
      });

      //console.log("targetGroup after sort: ", targetGroup );

      //this.setState({ tracks: targetGroup });
      //this.setState({ month: month });

      console.log("tracks: ", this.state.tracks );


        return (
          <div>
            <EventGrid data={targetGroup} group={this.state.data.group} month={month} checked={true} />
          </div>
        );

    }
    else {
      //return (<center><CircularProgress/></center>);
    }


  }

/*
  loadItems(page) {

    console.log("page: ", page);
    this.displayMemberGrid(page);

    //this.setState({ tracks: page });

    if(page == 12){
      this.setState({ hasMoreItems: false });
    }

  }
*/


  render() {

    const year = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    const loader = <div><center><CircularProgress/></center></div> ;

    console.log("event: " , this.state.event );

    if(this.state.event){
      console.log("event: " , this.state.event );
    }

    /*
    let items = [];
        this.state.tracks.map((track, i) => {
            items.push(
                <div key={i}>
                        <p>{this.state.month}</p>
                        <p>{track.name}</p>
                </div>
            );
        });
      */

    return (


        <div>
        {this.state.data.length === 0
        ?
        <div><center><CircularProgress/></center></div>
        :
          <div>
            {year.map((month , index) => (
              <div>
              {this.displayMemberGrid(month)}
              </div>
            ))}
          </div>

        }
        </div>
      

    );

  }
}

export default StageSchedule;
