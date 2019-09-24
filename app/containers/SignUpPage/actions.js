import { CHANGE_USER_OBJECT, SIGN_UP } from './constants';

export function signUp(response) {
  return {
    type: SIGN_UP,
    response,
  };
}

export function changeUserObject(field, value) {
  return {
    type: CHANGE_USER_OBJECT,
    field,
    value,
  };
}
