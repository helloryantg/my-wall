import React from 'react';
import './Goal.scss';

const Goal = (props) => {
    return(
        <div className="Goal">
            <div className="Goal__main-goal">160 lbs</div>
            <div className="Goal__goal-item">I want to reach this goal by Sunday</div>
        </div>
    );
}

export default Goal;