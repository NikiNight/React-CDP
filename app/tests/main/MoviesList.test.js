import React from 'react';
import MoviesList from './../../components/main/MoviesList';
import Movie from './../../components/main/Movie';
import {shallow, mount} from 'enzyme';

describe('Test MoviesList component', () => {

    const mockedMovies = [
        {src: 'src', title: 'title1', genres: ['genre'], release_date: '2018-01-01', vote_average: 1, id:1, selectMovie:function(){}, key: 1}, 
        {src: 'src', title: 'title2', genres: ['genre'], release_date: '2019-01-01', vote_average: 3, id:2, selectMovie:function(){}, key: 2},
        {src: 'src', title: 'title3', genres: ['genre'], release_date: '2017-01-01', vote_average: 2, id:3, selectMovie:function(){}, key: 3},
        {src: 'src', title: 'title4', genres: ['genre'], release_date: '2017-01-01', vote_average: 2, id:4, selectMovie:function(){}, key: 4}
    ];

    it('Sorts list of 4 films by Date and check 1-st Movie', () => {
        const component = mount(<MoviesList 
            movies={mockedMovies}
            activeSort="Date"
        />);
        expect(component.find(Movie).get(0).props.title).toBe('title2');
    });

    it('renders a list of 4 films', () => {
        const component = shallow(<MoviesList 
            movies={mockedMovies}
            activeSort="Rating"
        />);
        expect(component.find(Movie)).toHaveLength(4);
    });

})