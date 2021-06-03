import React from 'react';
import './NavigationLink.css';
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
    faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import SubMenu from '../subMenu/SubMenu';

function NavigationLink(props) {

    const handleClick = (e) => {

        const subMenus = document.querySelectorAll('.nav-submenu-container');
        subMenus.forEach(subMenu=>subMenu.style.opacity = '0')

        const subMenu = e.target.querySelector('.nav-submenu-container');
        if(subMenu) subMenu.style.opacity = '1';
    }

    const handleMouseOut = () => {
        
        const subMenus = document.querySelectorAll('.nav-submenu-container');
        subMenus.forEach(subMenu=>subMenu.style.opacity = '0')

    }

    return (
        <div onClick = {handleClick} onMouseOver= {handleClick} onMouseOut = { handleMouseOut }>
            {props.name}
            {
                props.dropdown && 
                    <>
                    <FontAwesomeIcon className = "nav-link-arrow" icon = {faChevronDown }/>
                    <SubMenu/>
                    </>
                 }
        </div>
    )
}

export default NavigationLink

