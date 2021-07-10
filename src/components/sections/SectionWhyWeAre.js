import React from 'react'
import ImageTopRated from '../../assets/img/feature-1.png';
import ImageBestQuality from '../../assets/img/feature-2.png';
import ImageLowPrice from '../../assets/img/feature-3.png';
import ImageWheWeAre from '../../assets/img/feature-banner-1.jpg';


import './SectionWhyWeAre.css'

const SectionWhyWeAre = () => {
    return (

        <div className="section-whyweare-content">
        <div className="section-whyweare-text">
            <div>
                <img src={ImageTopRated} alt="Top Rated " />
                <h3>Top Rated</h3>
                <p> Publishing packages and web page editors now use Lorem Ipsum as their default model text and a search for lorem ipsumwill uncover </p>
            </div>
            <div>
                <img src={ImageBestQuality} alt="Best Quality" />
                <h3>Best Quality </h3>
                <p> Publishing packages and web page editors now use Lorem Ipsum as their default model text and a search for lorem ipsumwill uncover </p>
            </div>
            <div >
                <img src={ImageLowPrice} alt="Low Price" />
                <h3>Low Price </h3>
                <p> Publishing packages and web page editors now use Lorem Ipsum as their default model text and a search for lorem ipsumwill uncover </p>
           </div>
        </div>
            <img src={ImageWheWeAre} alt="Why we are"/>
        </div>
    )
}

export default SectionWhyWeAre