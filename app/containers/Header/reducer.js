import produce from 'immer';
import { CHANGE_LOGIN_FORM_DATA } from './constants';

export const initialState = {
  loginName: '',
  password: '',
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_LOGIN_FORM_DATA:
        draft[action.field] = action.value;
        break;
    }
  });

export default loginPageReducer;
