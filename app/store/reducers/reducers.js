import {
  SELECT_MOVIE,
  SAVE_REQUEST_PARAM,
  SAVE_MOVIES,
  CHANGE_SORTING,
  CHANGE_FILTERING,
  SAVE_SEARCH_TEXT,
  CHANGE_LOADING_STATUS
} from '../actions/actionsTypes'

const initialState = {
  loading: false,
  selectedMovieId: null,
  savedMovies: {},
  sorting: 'Date',
  query: {
    search: '',
    limit: 500,
    searchBy: 'title',
    sortBy: 'release_date',
    sortOrder: 'desc',
    offset: 0,
  },
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
      case SELECT_MOVIE: 
        return {
          ...state,
          selectedMovieId: action.payload,
        };
      case SAVE_REQUEST_PARAM:
        return {
          ...state,
          query: {
            ...state.query,
            [action.payload.param]: action.payload.value,
          },
        };  
      case SAVE_MOVIES:
        return {
          ...state,
          savedMovies: action.payload.data,
        }; 
      case CHANGE_SORTING:
        return {
          ...state,
          sorting: action.payload,
        };
      case CHANGE_FILTERING:
        return {
          ...state,
          query: {
            ...state.query,
            searchBy: action.payload,
          }
        }; 
      case SAVE_SEARCH_TEXT:
        return {
          ...state,
          query: {
            ...state.query,
            search: action.payload,
          }
        }; 
      case CHANGE_LOADING_STATUS: 
        return {
          ...state,
          loading: action.payload,
        };  
      default: 
        return state;
    }
};
  
export default reducers;