import React from 'react';
import renderer from 'react-test-renderer';
import Logo from './../../components/common/Logo';

test('matches snapshot', () => {
  const tree = renderer.create(<Logo />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});