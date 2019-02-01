import React from 'react';
import './Name.scss';


const Name = (props) => {
    let currentHour = new Date().getHours();
    let greeting;
    
    if (currentHour < 12) {
        greeting = 'Good Morning';
    } else if (currentHour < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }

    return(
        <div className="Name">
            <div className="Name__title">{greeting}, <span className="Name__first-name">Ryan</span>!</div>
        </div>
    );
}

export default Name;