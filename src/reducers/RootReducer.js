import { combineReducers } from 'redux';

import TestingReducer from './TestingReducer';
import { navReducer } from '../../AppNavigation';

const RootReducers = combineReducers({
  test: TestingReducer,
  nav: navReducer,
});

export default RootReducers;
