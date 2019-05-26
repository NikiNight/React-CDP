import React from 'react';
import Movie from './Movie';
import { connect } from 'react-redux';
import { selectMovie } from '../../store/actions/actions';

class MoviesList extends React.Component {

    constructor(props) {
        super(props);
        this.sortMoviesList = this.sortMoviesList.bind(this);
        this.selectMovie = this.selectMovie.bind(this);
    }

    selectMovie(id) {
        this.props.selectMovie(id);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    sortMoviesList() {
        if (this.props.activeSort === 'Date') {
            this.props.movies.sort((a, b) => {
                if (a.release_date < b.release_date) {
                    return 1
                }
                if (a.release_date > b.release_date) {
                    return -1
                }
                return 0
            });
        } else {
            this.props.movies.sort((a, b) => {
                if (a.vote_average < b.vote_average) {
                    return 1
                }
                if (a.vote_average > b.vote_average) {
                    return -1
                }
                return 0
            });
        }
        return this.props.movies;
    }

    render() {
        return (
            <div className="movies-list">
                {       
                    this.sortMoviesList().map(movieProps => 
                        <Movie 
                            src={movieProps.poster_path}
                            title={movieProps.title}
                            genre={movieProps.genres.join(', ')}
                            year={movieProps.release_date.slice(0, 4)}
                            id={movieProps.id}
                            selectMovie={this.selectMovie}
                            key={movieProps.id}
                        />
                    )
                }
            </div>
        )
    }
}

function mapStateToProps (state) {
    const {  selectedMovie, isMovieSelected } = state;
    return { isMovieSelected: isMovieSelected, selectedMovie: selectedMovie }
}

function mapDispatchToProps (dispatch) {
  return {
    selectMovie: (id) => dispatch(selectMovie(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);