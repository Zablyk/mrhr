import React from 'react';

function NavigationLink(props) {
    return (
        <div>
            {props.name}
            { props.dropdown && <div>arrow</div>}
        </div>
    )
}

export default NavigationLink
