import { buyerOfferType } from '../types';

const initialState = {
   buyerAmount: 0,
   escrowFee: 0,
   btcAmount: 0
}

const bufferOfferReducer = (state = initialState, action) => {
   switch (action.type) {
      case buyerOfferType.SET_BUYER_AMOUNT:
         return {
            ...state,
            buyerAmount: action.payload,
         };
      case buyerOfferType.SET_BTC_AMOUNT:
         return {
            ...state,
            btcAmount: action.payload,
         };
      case buyerOfferType.SET_ESCROW_FEE:
         return {
            ...state,
            escrowFee: action.payload,
         };
      case buyerOfferType.RESET_OFFER:
         return {
            buyerAmount: 0,
            escrowFee: 0,
            btcAmount: 0
         };
      default:
         return state;
   }
};

export default bufferOfferReducer;
