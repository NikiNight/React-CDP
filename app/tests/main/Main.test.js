import React from 'react';
import Main from './../../components/main/Main';
import NoMovies from './../../components/main/NoMovies';
import SortLine from './../../components/main/SortLine';
import {shallow, mount} from 'enzyme';

describe('Sdescribe Main component', () => {

    const mockedMovies = [
        {src: 'src', title: 'title1', genres: ['genre'], release_date: '2018-01-01', vote_average: 1, id:1, selectMovie:function(){}, key: 1}, 
        {src: 'src', title: 'title2', genres: ['genre'], release_date: '2019-01-01', vote_average: 3, id:2, selectMovie:function(){}, key: 2},
        {src: 'src', title: 'title3', genres: ['genre'], release_date: '2017-01-01', vote_average: 2, id:3, selectMovie:function(){}, key: 3},
        {src: 'src', title: 'title4', genres: ['genre'], release_date: '2017-01-01', vote_average: 2, id:4, selectMovie:function(){}, key: 4}
    ];

    it('no movies should be shown', () => {
        const component = mount(<Main 
            moviesNum={0}
        />);
        expect(component.find(NoMovies)).toHaveLength(1);
    });

    it('sortline should be shown', () => {
        const component = mount(<Main 
            moviesNum={2}
            moviesList={mockedMovies}
        />);
        expect(component.find(SortLine)).toHaveLength(1);
    });

    it('should emit toggleSorting', () => {
        const component = mount(<Main 
            moviesNum={2}
            moviesList={mockedMovies}
        />);
        component.instance().toogleSorting('Rating');
        expect(component.instance().state.activeSort).toBe('Rating');
        //Check else state
        component.instance().toogleSorting('Rating');
        expect(component.instance().state.activeSort).toBe('Rating');
    });
})