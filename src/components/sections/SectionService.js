import React from 'react';
import './SectionService.css';
import ImageServiceMan from '../../assets/img/service-man.png'
import ImageServiceDesign from '../../assets/img/service-1.jpg'
import ImageServiceRoofing from '../../assets/img/service-2.jpg'
import ImageServicePlumbing from '../../assets/img/service-3.jpg'

const SectionService = () => {
    return (
        <div className = "section-service-content">
            <img src = {ImageServiceMan} alt="Service Man"/>
            
            <div className="section-service-content-text">
                <h3>Our Services</h3>
                <h2>Unique and Quality Service Makes Clients Happy</h2>
                    <div className="section-service-content-img">
                         <img src = {ImageServiceDesign} alt="Service Design"/>
                         <img src = {ImageServiceRoofing} alt="Service Roffing"/>
                         <img src = {ImageServicePlumbing} alt="Service Plumbing"/>
                     </div>
            </div>
            
        </div>
    )
}

export default SectionService
