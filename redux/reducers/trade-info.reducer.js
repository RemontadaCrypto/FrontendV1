import { TradeInfoType } from '../types';

const initialState = {
   buyerAmount: 0,
   status: null,
   sellerName: null,
   sellerState: 0,
   coin: null,
   rate: null,
   currency: null
}

const tradeInfoReducer = (state = initialState, action) => {
   switch (action.type) {
      case TradeInfoType.SET_TRADE_INFO:
         return {
            ...state,
            buyerAmount: action.buyerAmount,
            status: action.status,
            sellerName: action.sellerName,
            coin: action.coin,
            rate: action.rate,
            currency: action.currency,
            sellerState: action.sellerState,

         };
      case TradeInfoType.CLEAR_TRADE_INFO:
         return {
            buyerAmount: 0,
            sellerState: 0,
            status: null,
            sellerName: null,
            coin: null,
            rate: null,
            type: null
         }
      default:
         return state;
   }
};

export default tradeInfoReducer;
