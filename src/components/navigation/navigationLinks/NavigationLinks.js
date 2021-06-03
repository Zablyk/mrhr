import React from 'react';
import NavigationLink from './navigationLink/NavigationLink';
import './NavigationLinks.css';

const menuLinks = [
    {name : 'Home' },
    {name : 'About' },
    {name : 'Services', dropdown: true },
    {name : 'Project', dropdown: true },
    {name : 'Blog' },
    {name : 'Contacts' },
]


function NavigationLinks() {
    
    return (
        <div className="nav-links-container">
            {
                menuLinks.map(menu => 
                    <NavigationLink 
                        name={menu.name} 
                        dropdown={menu.dropdown} 
                    />)
            }
        </div>
    )
}

export default NavigationLinks
