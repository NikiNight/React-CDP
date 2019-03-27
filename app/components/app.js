import React from 'react';
import Footer from './footer/Footer'
import Header from './header/Header';
import Main from './main/Main';
import ErrorBoundary from './auxiliary/ErrorBoundary'

const mockedMovies = {
    "data": [
      {
        "id": 24428,
        "title": "The Avengers",
        "tagline": "Some assembly required.",
        "vote_average": 7.5,
        "vote_count": 14093,
        "release_date": "2012-04-25",
        "poster_path": "https://image.tmdb.org/t/p/w500/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
        "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
        "budget": 220000000,
        "revenue": 1519557910,
        "genres": [
          "Science Fiction",
          "Action",
          "Adventure"
        ],
        "runtime": 143
      },
      {
        "id": 99861,
        "title": "Avengers: Age of Ultron",
        "tagline": "A New Age Has Come.",
        "vote_average": 7.3,
        "vote_count": 8709,
        "release_date": "2015-04-22",
        "poster_path": "https://image.tmdb.org/t/p/w500/t90Y3G8UGQp0f0DrP60wRu9gfrH.jpg",
        "overview": "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
        "budget": 280000000,
        "revenue": 1405403694,
        "genres": [
          "Action",
          "Adventure",
          "Science Fiction"
        ],
        "runtime": 141
      },
      {
        "id": 299536,
        "title": "Avengers: Infinity War",
        "tagline": "An entire universe. Once and for all.",
        "vote_average": 0,
        "vote_count": 0,
        "release_date": "2018-04-25",
        "poster_path": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
        "budget": 500000000,
        "revenue": 0,
        "genres": [
          "Adventure",
          "Science Fiction",
          "Fantasy",
          "Action"
        ],
        "runtime": 156
      },
      {
        "id": 299534,
        "title": "Untitled Avengers",
        "tagline": "",
        "vote_average": 0,
        "vote_count": 9,
        "release_date": "2019-04-24",
        "poster_path": "https://image.tmdb.org/t/p/w500/aMETsaNNcDc6g5ZatQtVbySnSaA.jpg",
        "overview": "The culmination of the Marvel Cinematic Universe.",
        "budget": 0,
        "revenue": 0,
        "genres": [
          "Action",
          "Adventure",
          "Science Fiction"
        ],
        "runtime": null
      }
    ],
    "total": 4,
    "offset": 0,
    "limit": 10
}

class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        selectedMovieId: null,
        isMovieSelected: false,
      };
      this.selectMovieById = this.selectMovieById.bind(this);
      this.backToSearch = this.backToSearch.bind(this);
      this.selectMovie = this.selectMovie.bind(this);
    }

    selectMovieById() {
      return mockedMovies.data.find( x => x.id === this.state.selectedMovieId);
    }

    backToSearch() {
      this.setState ({
        isMovieSelected: false,
        selectedMovieId: null
      })
    }

    selectMovie(id) {
      this.setState ({
        isMovieSelected: true,
        selectedMovieId: id
      });
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    render() {
        return (
            <React.Fragment>
              <ErrorBoundary>
                <Header
                  selectedMovie={this.selectMovieById()}
                  isMovieSelected={this.state.isMovieSelected}
                  backToSearch={this.backToSearch}
                />
              </ErrorBoundary>
              <ErrorBoundary>
                <Main
                    moviesNum={mockedMovies.total}
                    moviesList={mockedMovies.data}
                    selectMovie={this.selectMovie}
                />
              </ErrorBoundary>
              <ErrorBoundary>
                <Footer/>
              </ErrorBoundary>
            </React.Fragment>
        )
    }
}

export default App;