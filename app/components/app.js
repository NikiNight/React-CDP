import React, { Component } from 'react';
import Footer from './footer/Footer'
import Header from './header/Header';
import Main from './main/Main';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Main/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default App;