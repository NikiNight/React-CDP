import * as types from './actionsTypes';
import Axios from 'axios';
import { history } from '../../index';
import store from '../../store/configureStore';

export const saveRequestParam = (param, value) => {
  return {
    type: types.SAVE_REQUEST_PARAM,
    payload: {
      param,
      value
    }
  };
};

export const saveMovies = (movies) => {
  return {
    type: types.SAVE_MOVIES,
    payload: movies
  };
};

export const changeSorting = (sorting) => {
  return {
    type: types.CHANGE_SORTING,
    payload: sorting
  };
};

export const changeFiltering = (filtering) => {
  return {
    type: types.CHANGE_FILTERING,
    payload: filtering
  }
}

export const saveSearchText = (text) => {
  return {
    type: types.SAVE_SEARCH_TEXT,
    payload: text
  }
}

export const changeLoadingStatus = (status) => {
  return {
    type: types.CHANGE_LOADING_STATUS,
    payload: status
  }
}

export const requestMovies = parametres => (dispatch) => {
  if (parametres) {
    dispatch(saveRequestParam(parametres.param, parametres.value));
  }

  dispatch(changeLoadingStatus(true));

  const formattedParametres = Object.entries(store.getState().query)
    .map(v => `${v[0]}=${v[1]}`)
    .join('&');

  const searchText = (store.getState().query.search);

  Axios.get(`http://react-cdp-api.herokuapp.com/movies/?${formattedParametres}`)
    .then(res => {
      dispatch(saveMovies(res.data));
      dispatch(changeLoadingStatus(false));
      history.push(`/search/${searchText}`);
    });
};

export const selectMovie = id => (dispatch) => {
  if (id=="") {
    dispatch(saveSingleMovie(id));
    history.push(`/`);
  } else {
    Axios.get(`http://react-cdp-api.herokuapp.com/movies/${id}`)
    .then(res => {
      dispatch(saveSingleMovie(res.data));
      history.push(`/film/${id}`);
    });
  }
};

export const saveSingleMovie = (movie) => {
  return {
    type: types.SELECT_MOVIE,
    payload: movie
  };
};