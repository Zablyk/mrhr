import React from 'react';
import './SectionService.css';
import ImageServiceMan from '../../assets/img/service-man.png'

const SectionService = () => {
    return (
        <div className = "section-service-content">
            <img src = {ImageServiceMan} alt="Service Man"/>
            <h3>Our Services</h3>
            <h2>Unique and Quality Service Makes Clients Happy</h2>
        </div>
    )
}

export default SectionService
