import { applyMiddleware, createStore, compose } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export default function configureStore(preloaedState) {
    const store = createStore(
        reducers(history),
        preloaedState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                thunk,
            ),
        )
    );
    return store;
}
