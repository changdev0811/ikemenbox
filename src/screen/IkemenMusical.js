import React, { Component } from 'react';
import PersonList from '../components/PersonList.js';

class IkemenMusical extends Component {

  constructor() {
    super()
    this.state = {
    }

  }

  componentDidMount() {
  }

  render() {

    const people = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <div>
        <center>2.5次元俳優一覧（写真、プロフィール情報が必要です。）</center>
        <PersonList props={people}/>
        </div>
    );

  }
}

export default IkemenMusical;
