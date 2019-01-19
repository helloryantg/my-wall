import React, { Component } from 'react';
import './App.scss'
import Name from '../../components/Name/Name';
import Time from '../../components/Time/Time';
import Goal from '../../components/Goal/Goal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      errorMessage: ''
    };

    // Getting the location - latitude
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude
        });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  
  render() {
    return (
      <div className="App">
        <Name></Name>
        <Time></Time>

        <Goal></Goal>  

        {/* <div>Lattidue: {this.state.latitude}</div> */}
      </div>
    );
  }
}

export default App;
