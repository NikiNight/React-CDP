import React from 'react';

class MovieFounded extends React.Component {
    render() {
        return (
            <div className="movie-founded">
                <img src="https://via.placeholder.com/300x400.jpg?text=Movie%20Cover" alt="" className="movie-founded__image" />
                <div className="movie-founded__description">
                    <div className="movie-founded__title">
                        <h1>Pulp fiction</h1>
                        <span className="movie-founded__rating">4.5</span>
                    </div>
                    <p className="movie-founded__category">
                        Oscar-winning movies
                    </p>
                    <div className="movie-founded__info">
                        <p className="movie-founded__year">1994</p>
                        <p className="movie-founded__duration">154 min</p>
                    </div>
                    <p className="movie-founded__about">
                        Est est explicabo ipsa voluptas sunt necessitatibus. Maxime eligendi saepe sunt nam labore aut unde distinctio distinctio. Nemo expedita aliquam molestiae officiis praesentium ut atque et saepe. Eaque alias illo nam quia dicta. Aut asperiores ut aliquid.
                    </p>
                </div>
            </div>
        )
    }
}

export default MovieFounded;