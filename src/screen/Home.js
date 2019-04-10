import React, { Component } from 'react';
import Tabletop from 'tabletop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ScrollableTabsButtonAuto from '../components/ScrollableTabsButtonAuto.js';
import ButtonAppBar from '../components/ButtonAppBar.js';
import Album from '../components/Album.js';
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Carousel from "../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GroupGrid from "./GroupGrid";


class Home extends Component {

  constructor() {
    super()
    this.state = {
      data: []
    }

  }

  componentDidMount(){
    window.location.href = '/top.html' ;
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Home;
