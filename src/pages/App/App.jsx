import React, { Component } from 'react';
import './App.scss'

import Name from '../../components/Name/Name';
import Time from '../../components/Time/Time';
import Goal from '../../components/Goal/Goal';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  render() {
    return (
      <div className="App">
        
          <Name></Name>
          <Time></Time>
          <Goal
            mainGoal = "154 lbs"
            goalItem = "I want to get to this goal weight before Coachella, April 2019"
          ></Goal>  
          <Goal
            mainGoal = "2 Applications"
            goalItem = "Send out full applications with cover letters and follow ups"
          ></Goal>

      </div>
    );
  }
}

export default App;
