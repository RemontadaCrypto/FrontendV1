import { CoinsType } from '../types';

const initialState = {
   coins: null,
   loading: false,
   error: null
}

const coinsReducer = (state = initialState, action) => {
   switch (action.type) {
      case CoinsType.FETCH_COINS:
         return {
            ...state,
            loading: true,
            error: null

         };
      case CoinsType.SET_COINS:
         return {
            ...state,
            coins: action.coins,
            loading: false
         }
      case CoinsType.FETCH_COINS_FAILED:
         return {
            ...state,
            coins: null,
            loading: false,
            error: action.error
         }
      default:
         return state;
   }
};

export default coinsReducer;
