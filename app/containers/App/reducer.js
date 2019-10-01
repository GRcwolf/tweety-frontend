import produce from 'immer';
import {
  SIGN_UP_USER_ERROR,
  SIGN_UP_USER_SUCCESS,
  SIGN_UP_USER,
  LOG_IN_USER,
  LOG_IN_USER_SUCCESS,
  LOG_IN_USER_ERROR,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  redirect: false,
  tweetData: {
    tweets: false,
    topic: false,
  },
  user: {
    id: '',
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    admin: false,
    authenticated: false,
  },
};

/* eslint-disable default-case, no-param-reassign, no-underscore-dangle */
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

      case LOG_IN_USER:
        draft.loading = true;
        draft.error = false;
        break;

      case LOG_IN_USER_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.user = {
          id: action.userData._id || '',
          firstName: action.userData.firstName || '',
          lastName: action.userData.lastName || '',
          userName: action.userData.userName || '',
          email: action.userData.email || '',
          admin: action.userData.admin || false,
          authenticated: true,
        };
        break;

      case LOG_IN_USER_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default appReducer;
