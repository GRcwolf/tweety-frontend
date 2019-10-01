import produce from 'immer';
import {
  CHANGE_USER_OBJECT,
  REDIRECT_USER,
  REDIRECT_SUCCEEDED,
} from './constants';

export const initialState = {
  userName: '',
  lastName: '',
  firstName: '',
  email: '',
  password: '',
  confirmPassword: '',
  redirect: '',
};

/* eslint-disable default-case, no-param-reassign */
const signUpPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USER_OBJECT:
        draft[action.field] = action.value;
        break;

      case REDIRECT_USER:
        draft.redirect = action.location;
        break;

      case REDIRECT_SUCCEEDED:
        draft.redirect = '';
        break;
    }
  });

export default signUpPageReducer;
