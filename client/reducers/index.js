import { combineReducers } from 'redux';

import taskReducer from './taskReducer';

const reducers = combineReducers({
  taskReducer: taskReducer,
})
export default reducers;