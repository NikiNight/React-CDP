import React from 'react';
import SearchByButton from './SearchByButton';
import { connect } from 'react-redux';
import { changeFiltering, saveSearchText, requestMovies } from '../../store/actions/actions';

class MovieSearch extends React.Component {

    constructor(props) {
        super(props);
        this.toggleButtonsState = this.toggleButtonsState.bind(this);
        this.searchMovieBy = this.searchMovieBy.bind(this);
    }

    toggleButtonsState(value) {
        if(value !== this.props.searchBy) {
            this.props.changeFiltering(value);
        }
    }

    searchMovieBy() {
        const inputValue = this.input.value;
        if(inputValue.length > 0) {
            this.props.saveSearchText(inputValue);
        } else {
            this.props.saveSearchText('');
        }
        this.props.requestMovies();
    }

    render() {
        return (
            <div className="movie-search">
                <h1>Find your movie</h1>
                <input type="text" name="movie" className="movie-search__input" ref={(input) => this.input=input} />
                <div className="movie-search__buttons-line">
                    <div className="movie-search__buttons">
                        <span>Search by</span>
                        <SearchByButton isActive={this.props.searchBy=='title'} value='Title' queryValue="title" toggleButtonsState={this.toggleButtonsState} />
                        <SearchByButton isActive={this.props.searchBy=='genres'} value='Genre' queryValue="genres" toggleButtonsState={this.toggleButtonsState} />
                    </div>
                    {
                        this.props.loading
                        ? <button className="button button_search button_disabled">Loading...</button>
                        : <button className="button button_search"  onClick={this.searchMovieBy}>Search</button>
                    }
                </div>
            </div>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
        changeFiltering: (filtering) => dispatch(changeFiltering(filtering)),
        saveSearchText: (text) => dispatch(saveSearchText(text)),
        requestMovies: (params) => dispatch(requestMovies(params))
    }
}

function mapStateToProps (state) {
  const {  query, loading } = state;
  return { search: query.search, searchBy: query.searchBy, loading: loading }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);