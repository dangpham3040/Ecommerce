import { combineReducers } from 'redux'
import counterReducter from './counter'
import loggReducter from './islogged'

const allReducter = combineReducers({
    counter: counterReducter,
    islogged: loggReducter
});
export default allReducter;