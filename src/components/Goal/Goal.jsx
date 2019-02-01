import React from 'react';
import './Goal.scss';

const Goal = (props) => {
    return(
        <div className="Goal">
            <div className="Goal__main-goal">{props.mainGoal}</div>
            <div className="Goal__goal-item">{props.goalItem}</div>
        </div>
    );
}

export default Goal;