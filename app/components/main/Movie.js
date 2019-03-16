import React from 'react';

class Movie extends React.Component {
    render() {
        return (
            <article className="movie">
                <img src="https://via.placeholder.com/300x400.jpg?text=Movie%20Cover" alt="" className="movie__image" />
                <div className="movie__description">
                    <div>
                        <h2 className="movie__title">Jackie Brown</h2>
                        <p className="movie__category">Drama</p>
                    </div>
                    <p className="movie__year">1994</p>
                </div>
            </article>
        )
    }
}

export default Movie;