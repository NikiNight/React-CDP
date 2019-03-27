import React from 'react';
import Logo from '../common/Logo';

const HeaderLine = (props) => {
    return (
        <div className="header-line">
            <Logo/>
            {props.isMovieSelected && <button className="button button_reverse" onClick={() => props.backToSearch()}>Search</button>}
        </div>
    )
}

export default HeaderLine;