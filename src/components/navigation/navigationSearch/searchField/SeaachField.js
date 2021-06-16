import React from 'react'

import './SearchField.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchField = (props) => {
    return (
        <div className={props.className}>
            <input type="text" placeholder = "Type and hit enter"/>
            <button><FontAwesomeIcon icon={faSearch} size="lg"/></button>
        </div>
    )
}

export default SearchField
