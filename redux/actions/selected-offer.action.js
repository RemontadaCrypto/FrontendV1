import { OfferType } from '../types';

export const selectOffer = (payload) => ({
   type: OfferType.SELECTED_OFFER,
   payload
});

export const clearOffer = () => ({
   type: OfferType.CLEAR_OFFER
});
