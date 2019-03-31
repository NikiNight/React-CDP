import React from 'react';
import renderer from 'react-test-renderer';
import MovieSearch from './../../components/header/MovieSearch';
import {shallow, mount} from 'enzyme';

describe('Test MovieSearch component', () => {

    test('matches snapshot', () => {
        const tree = renderer.create(<MovieSearch/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should emit toggleButtonsState', () => {
        const component = mount(<MovieSearch/>);
        component.instance().toggleButtonsState('Genre');
        expect(component.instance().state.searchBySelected).toBe('Genre');
    });

    it('should set searchValue', () => {
        const component = mount(<MovieSearch/>);
        component.find('.movie-search__input').instance().value = "test";
        component.find('.button_search').simulate('click');
        expect(component.instance().state.searchValue).toBe('test');
    });
})