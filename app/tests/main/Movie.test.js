import React from 'react';
import Movie from './../../components/main/Movie';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';

describe('Test Movie component', () => {

    test('Movie matches snapshot', () => {
        const tree = renderer.create(<Movie />)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should be call selectMovie', () => {
        const selectMovie = jest.fn();
        const component = mount(<Movie selectMovie={selectMovie}/>);
        component.simulate('click');
        expect(selectMovie).toHaveBeenCalled();
    });

})