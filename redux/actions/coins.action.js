import { CoinsType } from '../types';
import axios from "../../axios/axiosInstance";
import { ErrorHandler } from '../../utils/errorHandler';

export const fetchCoins = () => {
   return async (dispatch) => {
      dispatch({
         type: CoinsType.FETCH_COINS
      });

      try {
         const response = await axios({
            method: 'get',
            url: 'coins'
         });

         dispatch({
            type: CoinsType.SET_COINS,
            coins: response.data
         })
      } catch (e) {
         const error = ErrorHandler(e);
         dispatch({
            type: CoinsType.FETCH_COINS_FAILED,
            error: error || 'unable to fetch available coins'
         });
      }
   };
};