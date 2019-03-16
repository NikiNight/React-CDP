import React from 'react';
import Movie from './Movie';

class MoviesList extends React.Component {
    render() {
        return (
            <div className="movies-list">
                <Movie/>
                <Movie/>
                <Movie/>
            </div>
        )
    }
}

export default MoviesList;