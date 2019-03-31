import React from 'react';
import renderer from 'react-test-renderer';
import Header from './../../components/header/Header';

test('matches snapshot', () => {
  const tree = renderer.create(<Header />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});