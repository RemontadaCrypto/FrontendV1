import { UserType } from '../types';

export const loginUser = (user, token) => ({
  type: UserType.LOG_IN,
  user: user,
  token: token
});

export const logOutUser = () => ({
  type: UserType.LOG_OUT
});
