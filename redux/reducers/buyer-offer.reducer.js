import { buyerOfferType } from '../types';

const initialState = {
   buyerAmount: 0,
   escrowFee: 0,
   coinAmount: 0,
}

const buyerOfferReducer = (state = initialState, action) => {
   switch (action.type) {
      case buyerOfferType.SET_BUYER_AMOUNT:
         return {
            ...state,
            buyerAmount: action.payload,
         };
      case buyerOfferType.SET_COIN_AMOUNT:
         return {
            ...state,
            coinAmount: action.payload,
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
            coinAmount: 0
         };
      default:
         return state;
   }
};

export default buyerOfferReducer;
