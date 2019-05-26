import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/reducers';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

const root = document.getElementById('root');

const persistConfig = {
    key: 'root',
    storage,
};
  
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

export const history = createBrowserHistory();

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Router history={history}>
                <App />
            </Router>
        </PersistGate>
    </Provider>,
    root
);