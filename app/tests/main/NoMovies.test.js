import React from 'react';
import NoMovies from './../../components/main/NoMovies';
import renderer from 'react-test-renderer';

describe('Test NoMovies component', () => {

    test('NoMovies matches snapshot', () => {
        const tree = renderer.create(<NoMovies />)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });

})