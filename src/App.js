import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Home from "./screen/Home";
import PointBarcode from "./screen/PointBarcode";
import PointCoupon from "./screen/PointCoupon";
import BuildingOpening from "./screen/BuildingOpening";
import BuildingAccess from "./screen/BuildingAccess";
import BuildingSns from "./screen/BuildingSns";
import IkemenIdol from "./screen/IkemenIdol";
import IkemenIdolMember from "./screen/IkemenIdolMember";
import IkemenIdolMemberDetail from "./screen/IkemenIdolMemberDetail";
import IkemenMusical from "./screen/IkemenMusical";
import IkemenAudition from "./screen/IkemenAudition";
import LiveSchedule from "./screen/LiveSchedule";
import LiveGroup from "./screen/LiveGroup";
import GroupMemberList from "./screen/GroupMemberList";
import IkemenCafeReserve from "./screen/IkemenCafeReserve";
import IkemenCafeMenu from "./screen/IkemenCafeMenu";
import IkemenCafeOneDayManager from "./screen/IkemenCafeOneDayManager";
import StudioSchedule from "./screen/StudioSchedule";
import StudioProgram from "./screen/StudioProgram";
import IpcafeReserve from "./screen/IpcafeReserve";
import IpcafeConcept from "./screen/IpcafeConcept";
import IpcafeMenu from "./screen/IpcafeMenu";
import IpcafeGoods from "./screen/IpcafeGoods";
import IpcafeSns from "./screen/IpcafeSns";
import StageSchedule from "./screen/StageSchedule";

import EventTimeline from "./screen/EventTimeline";
import EventDetail from "./screen/EventDetail";

import {Helmet} from "react-helmet";
import Footer from "./components/Footer";
import NavbarPage from './components/NavbarPage.js';

import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';


class App extends Component {

  constructor() {
    super()

  }

  render() {
      return (

        <React.Fragment>
        {/*
        <Helmet>
          <meta name="robots" content="noindex,nofollow,noarchive" />
          <title>IKEMENビル公式サイト</title>
        </Helmet>
        */}

          <BrowserRouter>

          {/*
          <AppBar position="relative" color="default" style={{top: 0, bottom: 'auto'}}>
            <NavbarPage/>
          </AppBar>
          */}

            <Paper elevation={0} style={{ paddingBottom: 50, paddingTop:30 }}>
              <Route exact path='/' component={Home} />
              <Route exact path='/event' component={EventTimeline} />
              <Route exact path='/event/:group' component={EventDetail} />
              <Route exact path='/point-barcode' component={PointBarcode} />
              <Route exact path='/point-coupon' component={PointCoupon} />
              <Route exact path='/building-opening' component={BuildingOpening} />
              <Route exact path='/building-access' component={BuildingAccess} />
              <Route exact path='/building-sns' component={BuildingSns} />
              <Route exact path='/ikemen-idol' component={IkemenIdol} />
              <Route exact path='/ikemen-idol/:group' component={IkemenIdolMember} />
              <Route exact path='/ikemen-idol/:group/:member' component={IkemenIdolMemberDetail} />
              <Route exact path='/ikemen-musical' component={IkemenMusical} />
              <Route exact path='/ikemen-audition' component={IkemenAudition} />
              <Route exact path='/live-schedule' component={LiveSchedule} />
              <Switch>
                <Route exact path="/live-group" component={LiveGroup} />
                <Route exact path="/live-group/:id" component={GroupMemberList} />
              </Switch>
              <Route exact path='/ikemen-cafe-reserve' component={IkemenCafeReserve} />
              <Route exact path='/ikemen-cafe-menu' component={IkemenCafeMenu} />
              <Route exact path='/ikemen-cafe-1daymanager' component={IkemenCafeOneDayManager} />
              <Route exact path='/studio-schedule' component={StudioSchedule} />
              <Route exact path='/studio-program' component={StudioProgram} />
              <Route exact path='/ipcafe-reserve' component={IpcafeReserve} />
              <Route exact path='/ipcafe-concept' component={IpcafeConcept} />
              <Route exact path='/ipcafe-menu' component={IpcafeMenu} />
              <Route exact path='/ipcafe-goods' component={IpcafeGoods} />
              <Route exact path='/ipcafe-sns' component={IpcafeSns} />
              <Route exact path='/stage-schedule' component={StageSchedule} />
              <Route exact path='/stage-schedule/:group' component={EventDetail} />
              </Paper>

              {/*
              <AppBar position="fixed" color="default" style={{top: 'auto', bottom: 0}}>
                <Footer/>
              </AppBar>
              */}

          </BrowserRouter>
          </React.Fragment>

      );

  }
}

export default App;
