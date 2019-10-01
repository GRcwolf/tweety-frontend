import {
  CHANGE_USER_OBJECT,
  REDIRECT_USER,
  REDIRECT_SUCCEEDED,
} from './constants';
export function changeUserObject(field, value) {
  return {
    type: CHANGE_USER_OBJECT,
    field,
    value,
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
