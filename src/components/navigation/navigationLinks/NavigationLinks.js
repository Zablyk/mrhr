import React from 'react';
import NavigationSearch from '../navigationSearch/NavigationSearch';
import NavigationLink from './navigationLink/NavigationLink';
import './NavigationLinks.css';


function NavigationLinks() {
    return (
        <div className="nav-links-container">
            <NavigationLink name="Home" dropdown={true}/>
            <NavigationLink name="About"/>
            <NavigationLink name="Service"/>
            <NavigationLink name="Project"/>
            <NavigationLink name="Blog"/>
            <NavigationLink name="Contacts"/>
        </div>
    )
}

export default NavigationLinks
