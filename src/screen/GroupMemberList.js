import React, { Component } from 'react';
import MemberList from '../components/MemberList';

class GroupMemberList extends Component {

  constructor() {
    super()
    this.state = {
    }

  }

  componentDidMount() {
  }

  render() {

    const member = [1, 2, 3, 4, 5, 6];

    return (
        <div>
        <center>ライブの出演グループごとのメンバー一覧を表示します。（メンバーの写真が必要です。）</center>
        <MemberList props={member}/>
        </div>
    );

  }
}

export default GroupMemberList;
