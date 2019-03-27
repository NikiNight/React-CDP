import React from 'react';
import MovieFounded from './MovieFounded';
import MovieSearch from './MovieSearch';
import HeaderLine from './HeaderLine';
 
class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header">
                <div className="wrapper">
                    <HeaderLine 
                        isMovieSelected={this.props.isMovieSelected}
                        backToSearch={this.props.backToSearch}
                    />
                    {
                        this.props.isMovieSelected ?
                        <MovieFounded selectedMovie={this.props.selectedMovie} /> :
                        <MovieSearch/>
                    }
                </div>
            </header>
        )
    }
}

export default Header;