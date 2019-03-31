import React from 'react';
import renderer from 'react-test-renderer';
import App from './../../app/components/app';
import {mount} from 'enzyme';

describe('Test App component', () => {

    test('matches snapshot', () => {
        const tree = renderer.create(<App/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should disable isMovieSelected state and set selectedMovieId to null', () => {
        const component = mount(<App/>);
        component.instance().backToSearch();
        expect(component.instance().state.isMovieSelected).toBe(false);
        expect(component.instance().state.selectedMovieId).toBe(null);
    });

    it('should enable isMovieSelected state and set selectedMovieId to 1', () => {
        const component = mount(<App/>);
        component.instance().selectMovie(1);
        expect(component.instance().state.isMovieSelected).toBe(true);
        expect(component.instance().state.selectedMovieId).toBe(1);
    });

})