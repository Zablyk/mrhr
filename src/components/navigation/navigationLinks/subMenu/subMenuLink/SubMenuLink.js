import React from 'react'
import './SubMenuLink.css'

const SubMenuLink = (props) => {
    return (
        <a className="sub-menu-link-container" href={props.link}>
            {props.name}
        </a>
    )
}

export default SubMenuLink
