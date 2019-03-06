import React, { Component } from 'react';
import Logo from '../common/Logo';

class Footer extends React.Component {
    render() {
        return (
            React.createElement(
                'p',
                {className: 'footer'},
                'Hi, I am footer (React.createElement)',
                <Logo/>
            )
        )
    }
}

export default Footer;