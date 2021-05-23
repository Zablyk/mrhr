import React from 'react';

import './Navigation.css';
import NavigationLinks from './navigationLinks/NavigationLinks';
import NavigationLogo from './navigationLogo/NavigationLogo';
import NavigationSearch from './navigationSearch/NavigationSearch';

function Navigation() {
    return (
        <div className="navigation-container">
          <NavigationLogo/>
          <NavigationLinks/>
          <NavigationSearch/>
        </div>
    )
}

export default Navigation
