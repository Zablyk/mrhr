import React from 'react';
import './SectionService.css';
import ImageServiceMan from '../../assets/img/service-man.png'
import ImageServiceDesign from '../../assets/img/service-1.jpg'
import ImageServiceRoofing from '../../assets/img/service-2.jpg'
import ImageServiceElectrical from '../../assets/img/service-3.jpg'
import ImageServicePlumbing from '../../assets/img/service-4.jpg'
import ImageServiceHVAC from '../../assets/img/service-5.jpg'
import ImageServicePainting from '../../assets/img/service-6.jpg'


const SectionService = () => {
    return (
        <div>
        <div className = "section-service-content">
            <div className="image-serviceman">
                 <img src = {ImageServiceMan} alt="Service Man"/>
            </div>
            <div className="section-service-content-text">
                <h3>Our Services</h3>
                <h2>Unique and Quality Service Makes Clients Happy</h2>
                    <div className="section-service-content-img">
                         <div>
                             <img src = {ImageServiceDesign} alt="Service Design"/>
                             <h4>Design</h4>
                         </div>
                         <div>
                             <img src = {ImageServiceRoofing} alt="Service Roffing"/>
                             <h4>Roofing</h4>
                         </div>
                         <div>
                            <img src = {ImageServiceElectrical} alt="Service Electrical"/>
                            <h4>Electrical</h4>
                         </div>
                         <div>
                            <img src = {ImageServicePlumbing} alt="Service Plumbing"/>
                            <h4>Plumbing</h4>
                         </div>
                         <div>
                             <img src = {ImageServiceHVAC} alt="Service HVAC"/>
                            <h4>HVAC</h4>
                         </div>
                         <div>
                            <img src = {ImageServicePainting} alt="Service Painting"/>
                            <h4>Painting</h4>
                         </div>
                     </div>
            </div>
        </div>
        <div className="image-ruller">
            <div>
                <h4>585</h4>
                <h5>Projects</h5>
            </div>
            <div>
                <h4>378</h4>
                <h5>Clients</h5>
            </div>
            <div>
                <h4>545</h4>
                <h5>Sucess</h5>
            </div>
            <div>
                <h4>58</h4>
                <h5>Awards</h5>
            </div>
        </div>
     </div>           
    )
}

export default SectionService
