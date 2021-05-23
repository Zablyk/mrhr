import React from 'react';
import NavigationLink from './navigationLink/NavigationLink';
import './NavigationLinks.css';


function NavigationLinks() {
    return (
        <div className="nav-links-container">
            <NavigationLink name="Home"/>
            <NavigationLink name="About"/>
            <NavigationLink name="Service"/>
            <NavigationLink name="Project"/>
            <NavigationLink name="Blog"/>
            <NavigationLink name="Contacts"/>
        </div>
    )
}

export default NavigationLinks
