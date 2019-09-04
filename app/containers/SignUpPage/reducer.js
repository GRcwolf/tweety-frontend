import produce from 'immer';
import { CHANGE_USER_OBJECT } from './constants';

export const initialState = {
  userObject: {
    userName: '',
    lastName: '',
    firstName: '',
    email: '',
  },
};

/* eslint-disable default-case, no-param-reassign */
const signUpPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USER_OBJECT:
        state.userObject[draft.field] = draft.value;
        break;
    }
    if (action.type === CHANGE_USER_OBJECT) {
      console.log(draft.value, state);
    }
  });

export default signUpPageReducer;
