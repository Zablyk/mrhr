import React from 'react'
import SectionAbout from './SectionAbout'
import './Sections.css'
import SectionWhyWeAre from './SectionWhyWeAre'
import SectionService from './SectionService'

const Sections = (props) => {

   

    return (
        <div className="sections-content">
            <SectionAbout/>
            <SectionWhyWeAre/>
            <SectionService/>
        </div>
    )
}

export default Sections
