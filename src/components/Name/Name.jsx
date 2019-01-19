import React from 'react';
import './Name.scss';

const Name = (props) => {
    return(
        <div className="Name">
            <div className="Name__title">Welcome, <span className="Name__first-name">Ryan</span>!</div>
        </div>
    );
}

export default Name;