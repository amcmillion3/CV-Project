import React, { Component } from 'react';
import PersonalInfo from './components/PersonalInfo';
import './App.css';

class App extends Component {

  render() {
    return (
      <div id='container'>
        <PersonalInfo />
      </div>
    )
  }
}

export default App;
