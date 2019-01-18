import React, { Component } from 'react';
import './App.scss'
import Goal from '../../components/Goal/Goal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude
        });
      },
      err => console.log(err)
    );
  }
  
  
  render() {
    return (
      <div className="App">
        <Goal></Goal>  

        <div>Lattidue: {this.state.latitude}</div>
      </div>
    );
  }
}

export default App;
