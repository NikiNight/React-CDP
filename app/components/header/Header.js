import React from 'react';
import MovieFounded from './MovieFounded';
import MovieSearch from './MovieSearch';
import HeaderLine from './HeaderLine';
 
const Header = (props) => {

    return (
        <header className="header">
            <div className="wrapper">
                <HeaderLine 
                    isMovieSelected={props.isMovieSelected}
                    backToSearch={props.backToSearch}
                />
                {
                    props.isMovieSelected ?
                    <MovieFounded selectedMovie={props.selectedMovie} /> :
                    <MovieSearch/>
                }
            </div>
        </header>
    )
}

export default Header;