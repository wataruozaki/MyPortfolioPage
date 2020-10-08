import { combineReducers } from 'redux';
import worksReducer from './works/reducer';

const rootReducer = combineReducers({ works: worksReducer });

export default rootReducer;
