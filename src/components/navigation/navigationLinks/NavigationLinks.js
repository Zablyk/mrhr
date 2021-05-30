import React, { useState } from 'react';
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
    const [isOpen, setIsOpen] = useState(true)

    const handleClick = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <div className="nav-links-container">
            {
                menuLinks.map(menu => 
                    <NavigationLink 
                        name={menu.name} 
                        dropdown={menu.dropdown} 
                    />)
            }

            {/* <NavigationLink name="Home" />
            <NavigationLink name="About" />
            <NavigationLink name="Service" dropdown={true} isOpen={isOpen} onClick={handleClick}/>
            <NavigationLink name="Project" dropdown={true} isOpen={isOpen} onClick={handleClick}/>
            <NavigationLink name="Blog"/>
            <NavigationLink name="Contacts"/> */}
        </div>
    )
}

export default NavigationLinks
