import React from 'react';

const NoMovies = (props) => {
    return (
        <div className="no-movies">
            <p className="no-movies__title">{props.text}</p>
        </div>
    )
}

export default NoMovies;