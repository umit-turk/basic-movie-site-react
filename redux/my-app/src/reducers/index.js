import incrementReducer from './increment';
import loggedReducer from './logged';
import {combineReducers} from 'redux';

const allreducers =combineReducers(
    {
        increment:incrementReducer,
        logged:loggedReducer
    }
)

export default allreducers;