import { combineReducers } from 'redux';
import ToonReducer from './reducer_toon';

const rootReducer = combineReducers({
    toons: ToonReducer
});

export default rootReducer;
