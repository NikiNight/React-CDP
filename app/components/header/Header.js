import React, { Component } from 'react';
import MovieFounded from './MovieFounded';
import MovieSearch from './MovieSearch';
import HeaderLine from './HeaderLine';
 
class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="wrapper">
                    <HeaderLine/>
                    <MovieSearch/>
                    <MovieFounded/>
                </div>
            </header>
        )
    }
}

export default Header;