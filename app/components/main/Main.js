import React from 'react';
import SortLine from './SortLine';
import MoviesList from './MoviesList';
import NoMovies from './NoMovies';


class Main extends React.Component {
    render() {
        return (
            <main>
                <SortLine/>
                <div className="wrapper">
                    <MoviesList/>
                    <NoMovies/>
                </div>
            </main>
        )
    }
}

export default Main;