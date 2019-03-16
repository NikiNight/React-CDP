import React from 'react';

class MovieSearch extends React.Component {
    render() {
        return (
            <div className="movie-search">
                <h1>Find your movie</h1>
                <input type="text" name="movie" className="movie-search__input" />
                <div className="movie-search__buttons-line">
                    <div className="movie-search__buttons">
                        <span>Search by</span>
                        <button className="button button_active">Title</button>
                        <button className="button">Genre</button>
                    </div>
                    <button className="button button_search">Search</button>
                </div>
            </div>
        )
    }
}

export default MovieSearch;