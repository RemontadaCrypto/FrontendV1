import { combineReducers } from 'redux';
import offerReducer from './reducers/selected-offer.reducer';
import userReducer from './reducers/user.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  offer: offerReducer
});

