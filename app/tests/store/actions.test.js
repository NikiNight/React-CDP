import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../store/actions/actions';
import {mount} from 'enzyme';

describe('actions', () => {
  it('select Movie', () =>  {
    expect(actions.selectMovie().type).toBe('SELECT_MOVIE');
  })
});