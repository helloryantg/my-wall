import React from 'react';
import './Time.scss';

class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick =() => {
        this.setState({
            time: new Date().toLocaleString()
        })
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    render() {
        return(
            <div className="Time">
                <div className="Time__clock">{this.state.time}</div>
            </div>
        );
    }
}

export default Time;