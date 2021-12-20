import React, { Component } from 'react';
import PersonalInfo from './components/PersonalInfo';
import EducationInfoDisplay from './components/EducationInfo';
import './App.css';

class App extends Component {

  render() {
    return (
      <div id='container'>
        <PersonalInfo />
        <EducationInfoDisplay />
      </div>
    )
  }
}

export default App;
