import produce from 'immer';
import {
  SIGN_UP_USER_ERROR,
  SIGN_UP_USER_SUCCESS,
  SIGN_UP_USER,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  user: false,
  tweetData: {
    tweets: false,
    topic: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SIGN_UP_USER:
        draft.loading = true;
        draft.error = false;
        break;

      case SIGN_UP_USER_SUCCESS:
        draft.loading = false;
        draft.error = false;
        break;

      case SIGN_UP_USER_ERROR:
        draft.loading = false;
        draft.error = action.message;
        break;
    }
  });

export default appReducer;
