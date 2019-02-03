import React, { Component } from 'react';
import axios from 'axios';

import './App.scss'

import Name from '../../components/Name/Name';
import Time from '../../components/Time/Time';
import Goal from '../../components/Goal/Goal';
import Quote from '../../components/Quote/Quote';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  componentDidMount = () => {
  
  }

  render() {
    return (
      <div className="App">
          <div>Weather</div>

          <Name></Name>
          
          <Time></Time>

          <Quote></Quote>
          
          <Goal
            mainGoal = "154 lbs"
            goalItem = "I want to get to this goal weight before Coachella, April 2019"
          ></Goal>  
          
          <Goal
            mainGoal = "2 Applications"
            goalItem = "Send out full applications with cover letters and follow ups"
          ></Goal>

          <Goal
            mainGoal = "1800 Calories/day"
            goalItem = "30% PRO / 30% FAT / 40% FAT"
          ></Goal>

      </div>
    );
  }
}

export default App;
