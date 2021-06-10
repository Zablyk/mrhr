import React from 'react';
import './NavigationLink.css';
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
    faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import SubMenu from '../subMenu/SubMenu';

function NavigationLink (props) {
  
    return (
        <div className = "navigation-link">
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

