import React from 'react';

const SearchByButton = (props) => {
    return(
        <button className={`button ${props.isActive ? 'button_active' : ''}`} 
                value={props.value} 
                onClick={() => props.toggleButtonsState(props.queryValue)}
        >
            {props.value}
        </button>
    )
}

export default SearchByButton;