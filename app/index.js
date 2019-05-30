import React from 'react';
import App from './components/app';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { hot } from 'react-hot-loader';


export const history = createMemoryHistory();

if (module.hot) {
    module.hot.accept();
}

const Root = ({ Router, location, context, store }) => (
    <Provider store={store}>
        <Router history={history} location={location} context={context}>
            <App />
        </Router>
    </Provider>
);
 
export default hot(module)(Root);