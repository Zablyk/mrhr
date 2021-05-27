import React from 'react';

import './NavigationSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function NavigationSearch() {
    return (
        <div className="nav-search-container">
            <FontAwesomeIcon icon={faSearch} />
        </div>
    )
}

export default NavigationSearch
