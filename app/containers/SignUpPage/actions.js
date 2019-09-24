import { CHANGE_USER_OBJECT } from './constants';
export function changeUserObject(field, value) {
  return {
    type: CHANGE_USER_OBJECT,
    field,
    value,
  };
}
