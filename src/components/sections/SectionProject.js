import React from 'react'
import './SectionProject.css';
import ImageProject1 from '../../assets/img/project1-m.jpg'
import ImageProject2 from '../../assets/img/project2-m.jpg'
import ImageProject3 from '../../assets/img/project3-m.jpg'
import ImageProject4 from '../../assets/img/project4-m.jpg'

const SectionProject = () => {

    return (
        <div className="section-project-container">
           <div className="section-project-text">
                <h3>Our Projects </h3>
                <h2>Here you find our latest projects that we did and are doing</h2>
           </div>
           <div className="section-project-img">
                <img src = {ImageProject1} alt="Project1"/>
                <img src = {ImageProject2} alt="Project2"/>
                <img src = {ImageProject3} alt="Project3"/>
                <img src = {ImageProject4} alt="Project4"/>
                <img src = {ImageProject4} alt="Project4"/>
                <img src = {ImageProject4} alt="Project4"/>
                <img src = {ImageProject4} alt="Project4"/>
           </div>
        </div>
    )
}

export default SectionProject;
