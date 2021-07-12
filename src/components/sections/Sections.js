import React from 'react'
import SectionAbout from './SectionAbout'
import './Sections.css'
import SectionWhyWeAre from './SectionWhyWeAre'
import SectionService from './SectionService'
import SectionProject from './SectionProject'
import SectionTeam from './SectionTeam'

const Sections = (props) => {

   

    return (
        <div className="sections-content">
            <SectionAbout/>
            <SectionWhyWeAre/>
            <SectionService/>
            <SectionProject/>
            <SectionTeam/>
        </div>
    )
}

export default Sections
