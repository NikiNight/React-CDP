import React from 'react';

const Movie = (props) => {
    return (
        <article className="movie" onClick={() => props.selectMovie(props.id)}>
            <div className="movie__image-wrapper">
                <img src={props.src} alt="" className="movie__image" />
            </div>
            <div className="movie__description">
                <div>
                    <h2 className="movie__title">{props.title}</h2>
                    <p className="movie__category">{props.genre}</p>
                </div>
                <p className="movie__year">{props.year}</p>
            </div>
        </article>
    )
}

export default Movie;