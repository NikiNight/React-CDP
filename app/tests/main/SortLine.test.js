import React from 'react';
import SortLine from './../../components/main/SortLine';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';

describe('Test SortLine component', () => {

    test('SortLine matches snapshot', () => {
        const tree = renderer.create(<SortLine />)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should be call toogleSorting', () => {
        const toogleSorting = jest.fn();
        const component = mount(<SortLine toogleSorting={toogleSorting} moviesNum={2} activeSort="Date"/>);
        component.find('.button_minimal_active').simulate('click');
        expect(toogleSorting).toHaveBeenCalled();
    });

    it('Should be call toogleSorting with parametr', () => {
        const toogleSorting = jest.fn();
        const component = mount(<SortLine toogleSorting={toogleSorting} moviesNum={2} activeSort="Date"/>);
        component.find('.button_minimal:not(.button_minimal_active)').simulate('click');
        expect(toogleSorting).toHaveBeenCalledWith('Rating');
    });

    it('Inactive button should have appropriate content', () => {
        const toogleSorting = jest.fn();
        const component = mount(<SortLine toogleSorting={toogleSorting} moviesNum={2} activeSort="Rating"/>);
        const button = component.find('.button_minimal:not(.button_minimal_active)');
        expect(button.text()).toBe('release date');
    });

})