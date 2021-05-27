import React from 'react';
import NavLogo from '../../../assets/img/logo.png';
import './NavigationLogo.css';

function NavigationLogo() {
    return (
        <div className="nav-logo-container">
            <img src={NavLogo} alt="Logo" />
        </div>
    )
}

export default NavigationLogo
