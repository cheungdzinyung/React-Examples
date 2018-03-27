import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as GroupReducer } from './redux/user/reducer';
import { reducer as UserReducer } from './redux/user/reducer';
import thunk from 'redux-thunk';

export const store = createStore(combineReducers({
  group: GroupReducer,
  user: UserReducer
}), applyMiddleware(thunk));