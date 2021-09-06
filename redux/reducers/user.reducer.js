import { UserType } from '../types';

const initialState = {
  user: null,
  token: null,
  isAuth: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserType.LOG_IN:
      return {
        user: action.user,
        token: action.token,
        isAuth: true
      };
    case UserType.LOG_OUT:
      return {
        user: null,
        token: null,
        isAuth: false
      };
    default:
      return state;
  }
};

export default userReducer;
