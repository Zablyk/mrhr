import React from 'react';
import './SubMenu.css';
import SubMenuLink from './subMenuLink/SubMenuLink';

const SubMenu = (props) => {

    const subMenuService = [{
            name: 'Design',
            link: '/service/design'
        },
        {
            name: 'Roofing',
            link: '/service/roofing'
        },
        {
            name: 'Electrical',
            link: '/service/Electrical'
        },
        {
            name: 'Plumbing',
            link: '/service/plumbing'
        },
        {
            name: 'HVAC',
            link: '/service/HVAC'
        },
        {
            name: 'Painting',
            link: '/service/painting'
        },
        {
            name: 'Doors/Windows',
            link: '/service/painting'
        },
    ]

  

    return (
        <div className="nav-submenu-container" >
            {
                subMenuService.map(subMenu =>
                        <SubMenuLink name = { subMenu.name } link = { subMenu.link }/>)     
            }
        </div>
    )
}

export default SubMenu