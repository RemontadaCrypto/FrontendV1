import { OfferType } from '../types';

export const selectOffer = (payload) => ({
   type: OfferType.SELECTED_OFFER,
   payload
});

export const clearSelectedOffer = () => ({
   type: OfferType.CLEAR_OFFER
});
