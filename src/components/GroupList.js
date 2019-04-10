import React, { Component } from 'react';
import Tabletop from 'tabletop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ScrollableTabsButtonAuto from './ScrollableTabsButtonAuto.js';
import ButtonAppBar from './ButtonAppBar.js';
import GroupAlbum from './GroupAlbum.js';
import MemberAlbum from './MemberAlbum.js';
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


class GroupList extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
      anchorEl: null,
      groupName: ""
    }

  }

  hogeFunc(groupname) {
    console.log("groupname in hogeFunc: ", groupname );
    this.setState({ groupName: groupname });
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  componentDidMount() {
    Tabletop.init({
      key: '1pgMF2JtQ0vrUSPoIBeLaNESF3Y2w8SqZX6tTrRq1-ys',
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: false
    })
  }

  render() {

    const { anchorEl } = this.state;

    console.log("this.state.groupName: ", this.state.groupName );

    if(this.state.data.length != 0 ){

      console.log("this.state.data.one.elements[0].group: ", this.state.data.one.elements[0].group );

      return (
          <div>
            { this.state.groupName=="" && <GroupAlbum props={this.state.data.group} dataHoge={(groupname) => { this.hogeFunc(groupname); }} /> }
            {/*<Carousel/>*/}
            {/*<ScrollableTabsButtonAuto props={this.state.data}/>*/}
            {/*<GroupAlbum props={this.state.data.group}/>*/}
            <br/>
            { this.state.groupName==this.state.data.one.elements[0].group && <MemberAlbum props={this.state.data.one}/> }
            { this.state.groupName==this.state.data.two.elements[0].group && <MemberAlbum props={this.state.data.two}/> }
            { this.state.groupName==this.state.data.three.elements[0].group && <MemberAlbum props={this.state.data.three}/> }
            { this.state.groupName==this.state.data.four.elements[0].group && <MemberAlbum props={this.state.data.four}/> }
            { this.state.groupName==this.state.data.five.elements[0].group && <MemberAlbum props={this.state.data.five}/> }
            { this.state.groupName==this.state.data.six.elements[0].group && <MemberAlbum props={this.state.data.six}/> }
            { this.state.groupName==this.state.data.seven.elements[0].group && <MemberAlbum props={this.state.data.seven}/> }
            { this.state.groupName==this.state.data.eight.elements[0].group && <MemberAlbum props={this.state.data.eight}/> }

            <br/>

          </div>
      );

    }
    else{
      return (
        <div>
          <center><CircularProgress/></center>
        </div>
      );
    }

  }
}

export default GroupList;
