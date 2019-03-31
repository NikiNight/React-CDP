import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './../../components/footer/Footer';

test('matches snapshot', () => {
  const tree = renderer.create(<Footer />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});