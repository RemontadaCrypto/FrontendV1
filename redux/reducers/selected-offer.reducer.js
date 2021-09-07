import { OfferType } from '../types';

const initialState = null;

const offerReducer = (state = initialState, action) => {
   switch (action.type) {
      case OfferType.SELECTED_OFFER:
         return action.payload;
      case OfferType.CLEAR_OFFER:
         return null;
      default:
         return state;
   }
};

export default offerReducer;
