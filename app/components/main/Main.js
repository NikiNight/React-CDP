import React from 'react';
import SortLine from './SortLine';
import MoviesList from './MoviesList';
import NoMovies from './NoMovies';
import { connect } from 'react-redux';
import { requestMovies, changeSorting } from '../../store/actions/actions'
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";

class Main extends React.Component {

     constructor(props) {
        super(props);
        this.toogleSorting = this.toogleSorting.bind(this);
    }

    toogleSorting(value) {
        if(value !== this.props.sorting) {
            this.props.changeSorting(value);
        }
    }

    render() {
        return (
            <main className={`${this.props.loading ? 'loading' : ''}`}>
            <>
                <Switch>
                    <Route exact strict path="/" component={() => <NoMovies text="Please, type something to find"/>} />
                    <Route exact path={["/search/:query", "/film/:id"]}>
                        {(this.props.savedMovies.length > 0) &&
                            <SortLine 
                                moviesNum={this.props.savedMovies.length}
                                activeSort={this.props.sorting}
                                toogleSorting={this.toogleSorting} 
                            />
                        }
                        <div className="wrapper">
                            {(this.props.savedMovies.length > 0) ? 
                                <MoviesList 
                                    movies={this.props.savedMovies} 
                                    activeSort={this.props.sorting}
                                /> :
                                <NoMovies text="No films found"/>
                            }
                        </div>
                    </Route>
                    <Route component={() => <NoMovies text="404"/>}/>
                </Switch>
                </>
            </main>
        )
    }
}

function mapStateToProps (state) {
    const { savedMovies, sorting, loading } = state;
    return { savedMovies: savedMovies, sorting: sorting, loading: loading }
}
  
function mapDispatchToProps (dispatch) {
    return {
        requestMovies: () => dispatch(requestMovies()),
        changeSorting: (sorting) => dispatch(changeSorting(sorting))
    }
}  

export default connect(mapStateToProps, mapDispatchToProps)(Main);