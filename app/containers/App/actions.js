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
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  SET_USERS_TO_GET,
  CHECK_IF_USER_IS_AUTHENTICATED,
  CHECK_IF_USER_IS_AUTHENTICATED_SUCCESS,
  UNSET_USERS_TO_GET,
  CHECK_IF_USER_IS_AUTHENTICATED_SUCCEEDED,
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

export function getUser(userId) {
  return {
    type: GET_USER,
    userId,
  };
}

export function getUserSuccess(user) {
  return {
    type: GET_USER_SUCCESS,
    user,
  };
}

export function getUserError() {
  return {
    type: GET_USER_ERROR,
  };
}

export function setUsersToGet(userIds) {
  return {
    type: SET_USERS_TO_GET,
    userIds,
  };
}

export function unsetUsersToGet() {
  return {
    type: UNSET_USERS_TO_GET,
  };
}

export function checkIfUserIsLoggedIn() {
  return {
    type: CHECK_IF_USER_IS_AUTHENTICATED,
  };
}

export function checkIfUserIsLoggedInSuccess(user) {
  return {
    type: CHECK_IF_USER_IS_AUTHENTICATED_SUCCESS,
    user,
  };
}

export function checkIfUserIsLoggedInSucceeeded() {
  return {
    type: CHECK_IF_USER_IS_AUTHENTICATED_SUCCEEDED,
  };
}
