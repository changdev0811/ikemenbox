import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import tabtheme from "../App.css";

import Album from './Album.js';
import GroupAlbum from './GroupAlbum.js';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    textTransform: 'none'
  }
});

class ScrollableTabsButtonAuto extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    console.log("this.props : ", this.props );

    const { value } = this.state;

    const groupName = ['B2takes!',"Rush×300","CoLoN:","AsteRisM⁂","JustC-3","Backslash","アシスタントボーイズ（仮）","Prista☆"];

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            <Tab label={groupName[0]} style={{ textTransform: 'none' }} />
            <Tab label={groupName[1]} style={{ textTransform: 'none' }} />
            <Tab label={groupName[2]} style={{ textTransform: 'none' }} />
            <Tab label={groupName[3]} style={{ textTransform: 'none' }} />
            <Tab label={groupName[4]} style={{ textTransform: 'none' }} />
            <Tab label={groupName[5]} style={{ textTransform: 'none' }} />
            <Tab label={groupName[6]} style={{ textTransform: 'none' }} />
            <Tab label={groupName[7]} style={{ textTransform: 'none' }} />
            <Tab label="Group" style={{ textTransform: 'none' }} />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><Album props={this.props.props.one}/></TabContainer>}
        {value === 1 && <TabContainer><Album props={this.props.props.two}/></TabContainer>}
        {value === 2 && <TabContainer><Album props={this.props.props.three}/></TabContainer>}
        {value === 3 && <TabContainer><Album props={this.props.props.four}/></TabContainer>}
        {value === 4 && <TabContainer><Album props={this.props.props.five}/></TabContainer>}
        {value === 5 && <TabContainer><Album props={this.props.props.six}/></TabContainer>}
        {value === 6 && <TabContainer><Album props={this.props.props.seven}/></TabContainer>}
        {value === 7 && <TabContainer><Album props={this.props.props.eight}/></TabContainer>}
        {value === 8 && <TabContainer><GroupAlbum props={this.props.props.group}/></TabContainer>}
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);
