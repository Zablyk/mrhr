import React from 'react'
import SectionAbout from './SectionAbout'
import './Sections.css'
import SectionWhyWeAre from './SectionWhyWeAre'

const Sections = (props) => {

   

    return (
        <div className="sections-content">
            <SectionAbout/>
            <SectionWhyWeAre/>
        </div>
    )
}

export default Sections
