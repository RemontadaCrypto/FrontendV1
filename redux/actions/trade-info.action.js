import { TradeInfoType } from '../types';

export const setTradeInfo = ({
   buyerAmount,
   status,
   sellerName,
   coin,
   rate,
   sellerState,
   currency
}) => ({
   type: TradeInfoType.SET_TRADE_INFO,
   buyerAmount,
   status,
   sellerName,
   coin,
   rate,
   sellerState,
   currency
});

export const clearTradeInfo = () => ({
   type: TradeInfoType.CLEAR_TRADE_INFO
});
