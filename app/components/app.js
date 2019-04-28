import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';
import ErrorBoundary from './auxiliary/ErrorBoundary';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
              <ErrorBoundary>
                <Header/>
              </ErrorBoundary>
              <ErrorBoundary>
                <Main/>
              </ErrorBoundary>
              <ErrorBoundary>
                <Footer/>
              </ErrorBoundary>
            </React.Fragment>
        )
    }
}

export default App;