import produce from 'immer';
import { CHANGE_USER_OBJECT } from './constants';

export const initialState = {
  userName: '',
  lastName: '',
  firstName: '',
  email: '',
};

/* eslint-disable default-case, no-param-reassign */
const signUpPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USER_OBJECT:
        draft[action.field] = action.value;
        break;
    }
  });

export default signUpPageReducer;
