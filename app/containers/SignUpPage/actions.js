import { CHANGE_USER_OBJECT, SIGN_UP } from './constants';

export function signUp(userObject) {
  return {
    type: SIGN_UP,
    userObject,
  };
}

export function changeUserObject(field, value) {
  return {
    type: CHANGE_USER_OBJECT,
    field,
    value,
  };
}
