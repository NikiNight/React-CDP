import React from 'react';
import renderer from 'react-test-renderer';
import HeaderLine from './../../components/header/HeaderLine';
import {mount} from 'enzyme';

describe('Test HeaderLine component', () => {

  test('matches snapshot', () => {
    const tree = renderer.create(<HeaderLine isMovieSelected={true} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should be call backToSearch', () => {
    const backToSearch = jest.fn();
    const component = mount(<HeaderLine isMovieSelected={true} backToSearch={backToSearch}/>);
    component.find('.button').simulate('click');
    expect(backToSearch).toHaveBeenCalled();
  });

})