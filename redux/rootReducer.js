import { combineReducers } from 'redux';
import offerReducer from './reducers/selected-offer.reducer';
import userReducer from './reducers/user.reducer';
import buyerOfferReducer from './reducers/buyer-offer.reducer';
import tradeInfoReducer from './reducers/trade-info.reducer';
import coinsReducer from './reducers/coins.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  offer: offerReducer,
  buyerOffer: buyerOfferReducer,
  tradeInfo: tradeInfoReducer,
  coins: coinsReducer
});

