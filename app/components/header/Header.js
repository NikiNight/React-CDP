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
        this.selectMovieById = this.selectMovieById.bind(this);
    }

    backToSearch() {
        this.props.selectMovie(null);
    }

    selectMovieById() {
        return this.props.savedMovies.find( x => x.id === this.props.selectedMovieId);
    }

    componentWillUpdate() {
        if(this.props.savedMovies.length>0) {
            this.selectMovieById()
        };
    }

    render() {
        return ( 
            <header className="header">
                <div className="wrapper">
                    <HeaderLine 
                        isMovieSelected={this.props.selectedMovieId !== null}
                        backToSearch={this.backToSearch}
                    />
                    {
                        this.props.selectedMovieId !== null ?
                        <MovieFounded selectedMovie={this.selectMovieById()} /> :
                        <MovieSearch/>
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
  const {  selectedMovieId, savedMovies } = state;
  return { selectedMovieId: selectedMovieId, savedMovies: savedMovies }
}
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);