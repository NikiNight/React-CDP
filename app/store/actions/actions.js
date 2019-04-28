import * as types from './actionsTypes';
import Axios from 'axios';
import { store } from '../../index'

export const selectMovie = (id) => ({ 
  type: types.SELECT_MOVIE, 
  payload: id
})

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

  Axios.get(`http://react-cdp-api.herokuapp.com/movies/?${formattedParametres}`)
    .then(res => {
      dispatch(saveMovies(res.data));
      dispatch(changeLoadingStatus(false));
    });
};
