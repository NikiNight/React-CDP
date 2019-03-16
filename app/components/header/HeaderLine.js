import React from 'react';
import Logo from '../common/Logo';

class HeaderLine extends React.Component {
    render() {
        return (
            <div className="header-line">
                <Logo/>
                <button className="button button_reverse">Search</button>
            </div>
        )
    }
}

export default HeaderLine;