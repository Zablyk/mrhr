import React from 'react'
import {Infobar} from './infobar/Infobar.js';

import './Header.css';
import Navigation from '../navigation/Navigation.js';
import Hero from './hero/Hero.js';

export const Header = () => {
    return (
        <div className="header-container">
            <Infobar/>
            <Navigation/>
            <Hero/>
        </div>
    )
}
