import produce from 'immer';
import {
  SIGN_UP_USER_ERROR,
  SIGN_UP_USER_SUCCESS,
  SIGN_UP_USER,
  LOG_IN_USER,
  LOG_IN_USER_SUCCESS,
  LOG_IN_USER_ERROR,
  LOG_OUT,
  SET_ERROR_MESSAGE,
  UNSET_ERRORS,
} from './constants';

export const initialState = {
  loading: false,
  errors: [],
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
        break;

      case SIGN_UP_USER_SUCCESS:
        draft.loading = false;
        break;

      case SIGN_UP_USER_ERROR:
        draft.loading = false;
        draft.errors = action.message;
        break;

      case LOG_IN_USER:
        draft.loading = true;
        break;

      case LOG_IN_USER_SUCCESS:
        draft.loading = false;
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
        draft.errors = action.error;
        break;

      case LOG_OUT:
        draft.user = initialState.user;
        break;

      case SET_ERROR_MESSAGE:
        draft.errors.push(action.message);
        break;

      case UNSET_ERRORS:
        draft.errors = [];
        break;
    }
  });

export default appReducer;
