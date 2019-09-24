import {
  SIGN_UP_USER,
  SIGN_UP_USER_ERROR,
  SIGN_UP_USER_SUCCESS,
  REDIRECT_USER,
  REDIRECT_SUCCEEDED,
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

export function redirectUser(location) {
  return {
    type: REDIRECT_USER,
    location,
  };
}

export function redirectSucceeded() {
  return {
    type: REDIRECT_SUCCEEDED,
  };
}
