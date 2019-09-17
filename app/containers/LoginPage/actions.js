import { CHANGE_LOGIN_FORM_DATA } from './constants';

export function changeLoginData(field, value) {
  return {
    type: CHANGE_LOGIN_FORM_DATA,
    field,
    value,
  };
}
