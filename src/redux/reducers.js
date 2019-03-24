import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import visualization from './reducers/visualization';
import userWorksAddress from './reducers/userWorksAddress';

export default (history) => combineReducers({
    visualization,
    userWorksAddress,
    router: connectRouter(history)
});