import React from 'react'
import ImageSectionAbout from '../../assets/img/about-section-1.png';
import './SectionAbout.css'

const SectionAbout = () => {
    return (
        <div className="section-about-content">
            <img src={ImageSectionAbout} alt="About Section"/>
            <div className="section-about-content-text">
                <h3>Science 2008</h3>
                <h2>Provide the best quality service, renovation and construction</h2>
                <p>always for You we can design, install, maintain and repair almost everything in Your house</p>
                <button>Start now</button>
            </div>
        </div>
    )
}

export default SectionAbout
