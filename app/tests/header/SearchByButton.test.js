import React from 'react';
import renderer from 'react-test-renderer';
import SearchByButton from './../../components/header/SearchByButton';
import {mount} from 'enzyme';

describe('Test SearchByButton component', () => {

    test('matches snapshot', () => {
        const tree = renderer.create(<SearchByButton isActive={true} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should be call toggleButtonsState', () => {
        const toggleButtonsState = jest.fn();
        const component = mount(<SearchByButton toggleButtonsState={toggleButtonsState}/>);
        component.find('.button').simulate('click');
        expect(toggleButtonsState).toHaveBeenCalled();
    });

})