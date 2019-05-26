import React from 'react';
import MovieFounded from './MovieFounded';
import MovieSearch from './MovieSearch';
import HeaderLine from './HeaderLine';
import { selectMovie } from '../../store/actions/actions';
import { connect } from 'react-redux';
 
class Header extends React.Component {

    constructor(props) {
        super(props);
        this.backToSearch = this.backToSearch.bind(this);
    }

    backToSearch() {
        this.props.selectMovie('');
    }

    render() {
        return ( 
            <header className="header">
                <div className="wrapper">
                    <HeaderLine 
                        isMovieSelected={Object.keys(this.props.selectedMovie).length !== 0}
                        backToSearch={this.backToSearch}
                    />
                    {
                        Object.keys(this.props.selectedMovie).length !== 0 ?
                        <MovieFounded selectedMovie={this.props.selectedMovie} /> :
                        <MovieSearch />
                    }
                </div>
            </header>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
      selectMovie: (id) => dispatch(selectMovie(id))
    }
}

function mapStateToProps (state) {
  const {  selectedMovie, savedMovies } = state;
  return { selectedMovie: selectedMovie, savedMovies: savedMovies }
}
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);