import {
  SIGN_UP_USER,
  SIGN_UP_USER_ERROR,
  SIGN_UP_USER_SUCCESS,
} from './constants';

export function signUpUser() {
  return {
    type: SIGN_UP_USER,
  };
}

export function userSignedUp(message) {
  return {
    type: SIGN_UP_USER_SUCCESS,
    message,
  };
}

export function userSignUpError(message) {
  return {
    type: SIGN_UP_USER_ERROR,
    message,
  };
}
