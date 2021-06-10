import React, {useState}  from 'react';


import './NavigationSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import SearchField from './searchField/SeaachField';


function NavigationSearch() {
const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);

    }

    
    return (
        <div className="nav-search-container" onClick= {handleClick}>
            {
        clicked ?
            <>
                <FontAwesomeIcon icon={faTimes} />
                <SearchField/>
            </>
          :  
           <FontAwesomeIcon icon={faSearch} />
        }
        </div>
    )
}

export default NavigationSearch;
