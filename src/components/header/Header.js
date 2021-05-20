import React from 'react'
import {Infobar} from './infobar/Infobar.js';

import './Header.css';

export const Header = () => {
    return (
        <div className="header-container">
            <Infobar/>
        </div>
    )
}
