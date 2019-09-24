import produce from 'immer';
import { CHANGE_USER_OBJECT, SIGN_UP } from './constants';

export const initialState = {
  userName: '',
  lastName: '',
  firstName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

/* eslint-disable default-case, no-param-reassign */
const signUpPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USER_OBJECT:
        draft[action.field] = action.value;
        break;
      case SIGN_UP
    }
  });

export default signUpPageReducer;
