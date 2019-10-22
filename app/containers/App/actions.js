import {
  SIGN_UP_USER,
  SIGN_UP_USER_ERROR,
  SIGN_UP_USER_SUCCESS,
  LOG_IN_USER,
  LOG_IN_USER_SUCCESS,
  LOG_IN_USER_ERROR,
  LOG_OUT,
  SET_ERROR_MESSAGE,
  UNSET_ERRORS,
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

export function logInUser() {
  return {
    type: LOG_IN_USER,
  };
}

export function userLoggedIn(userData) {
  return {
    type: LOG_IN_USER_SUCCESS,
    userData,
  };
}

export function userLogInError(message) {
  return {
    type: LOG_IN_USER_ERROR,
    message,
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
  };
}

export function errorMessage(message) {
  return {
    type: SET_ERROR_MESSAGE,
    message,
  };
}

export function unsetErrors() {
  return {
    type: UNSET_ERRORS,
  };
}
