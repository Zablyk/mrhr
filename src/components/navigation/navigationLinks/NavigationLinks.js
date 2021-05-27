import React from 'react';
import NavigationLink from './navigationLink/NavigationLink';
import './NavigationLinks.css';


function NavigationLinks() {
    return (
        <div className="nav-links-container">
            <NavigationLink name="Home" dropdown={true}/>
            <NavigationLink name="About"/>
            <NavigationLink name="Service" dropdown={true}/>
            <NavigationLink name="Project" dropdown={true}/>
            <NavigationLink name="Blog" dropdown={true}/>
            <NavigationLink name="Contacts"/>
        </div>
    )
}

export default NavigationLinks
