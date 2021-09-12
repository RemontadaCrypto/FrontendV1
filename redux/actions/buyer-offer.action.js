import { buyerOfferType } from '../types';

export const setBuyerAmount = (payload) => ({
   type: buyerOfferType.SET_BUYER_AMOUNT,
   payload
});

export const setCoinAmount = (payload) => ({
   type: buyerOfferType.SET_COIN_AMOUNT,
   payload
});

export const setEscrowFee = (payload) => ({
   type: buyerOfferType.SET_ESCROW_FEE,
   payload
});

export const resetOffer = () => ({
   type: buyerOfferType.RESET_OFFER
});
