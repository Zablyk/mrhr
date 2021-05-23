import React from 'react';
import phone from '../../../assets/img/phone.png';
import clock from '../../../assets/img/clock.png';

import './Infobar.css'


export const Infobar = () => {
    return (
        <div className="infobar">
            <div className='phone'> <img src={phone} alt="Phone number"/>+1647 787 5239</div>            
            <div className="hours"><img src={clock} alt="Operation hours"/>9 am - 7 pm</div>            
            <div>Login/Register</div>            
        </div>
    )
}
