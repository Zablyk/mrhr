import React from 'react'
import Section from './Section';
import SectionAbout from './sections/SectionAbout';

const Content = () => {
    return (
        <div>
            <Section data={<SectionAbout/>}/>
        </div>
    )
}

export default Content
