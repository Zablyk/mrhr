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
            <div className="block">
                <img src={ImageTopRated} alt="Top Rated" />
                <div>
                    <h4>Top Rated</h4>
                    <p> Publishing packages and web page editors now use Lorem Ipsum as their default model text and a search for lorem ipsumwill uncover </p>
                </div>
            </div>
            <div className="block">
                <img src={ImageBestQuality} alt="Best Quality" />
                <div>
                    <h4>Best Quality </h4>
                    <p> Publishing packages and web page editors now use Lorem Ipsum as their default model text and a search for lorem ipsumwill uncover </p>
                </div>
            </div>
            <div className="block">
                <img src={ImageLowPrice} alt="Low Price" />
                <div>
                    <h4>Low Price </h4>
                    <p> Publishing packages and web page editors now use Lorem Ipsum as their default model text and a search for lorem ipsumwill uncover </p>
                </div>
           </div>
        </div >
        <div className="image">
            <img src={ImageWheWeAre} width="100%" alt="Why we are"/>
        </div>
        </div>
    )
}

export default SectionWhyWeAre