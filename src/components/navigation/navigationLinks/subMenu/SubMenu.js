import React from 'react';
import './SubMenu.css';
import SubMenuLink from './subMenuLink/SubMenuLink';

const SubMenu = (props) => {

    const handleOnMouseOver = (e) => {
        e.target.style.opacity = '1';
    }



    return (
        <div className="nav-submenu-container" onMouseOver = {handleOnMouseOver}>
            <SubMenuLink name="Design" link="/service/design"/>
            <SubMenuLink name="Roofing" link="/service/doofing"/>
            < SubMenuLink name = "Electrical"
            link = "/service/painting" / >
                <
                SubMenuLink name = "Plumbing"
            link = "/service/painting" / >
                <
                SubMenuLink name = "HVAC"
            link = "/service/plumbing" / >
                <
                SubMenuLink name = "Painting"
            link = "/service/plumbing" / >
                <
                SubMenuLink name = "DOORS/WINDOWS"
            link = "/service/plumbing" / >
        </div>
    )
}

export default SubMenu