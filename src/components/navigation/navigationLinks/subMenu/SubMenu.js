import React from 'react';
import './SubMenu.css';
import SubMenuLink from './subMenuLink/SubMenuLink';

const SubMenu = (props) => {
    return (
        <div className="nav-submenu-container">
            <SubMenuLink name="Design" link="/service/design"/>
            <SubMenuLink name="Roofing" link="/service/doofing"/>
            <SubMenuLink name="Painting" link="/service/painting"/>
            <SubMenuLink name="Plumbing" link="/service/plumbing"/>
        </div>
    )
}

export default SubMenu