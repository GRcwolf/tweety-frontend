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
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  SET_USERS_TO_GET,
  UNSET_USERS_TO_GET,
} from './constants';

export const initialState = {
  loading: false,
  errors: [],
  redirect: false,
  cache: {
    users: {},
    usersToGet: [],
  },
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
        draft.loading = false;
        break;

      case UNSET_ERRORS:
        draft.errors = [];
        break;

      case GET_USER:
        draft.cache.loading = true;
        break;

      case GET_USER_SUCCESS:
        draft.loading = false;
        draft.cache.users[action.user._id] = action.user;
        break;

      case GET_USER_ERROR:
        draft.cache.loading = false;
        break;

      case SET_USERS_TO_GET:
        draft.cache.usersToGet = action.userIds;
        break;

      case UNSET_USERS_TO_GET:
        draft.cache.usersToGet = [];
        break;
    }
  });

export default appReducer;
