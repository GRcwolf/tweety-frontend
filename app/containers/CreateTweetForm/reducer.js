import produce from 'immer';
import {
  CREATE_TWEET,
  UPDATE_CONTENT,
  CREATE_TWEET_SUCCESS,
  CREATE_TWEET_ERROR,
} from './constants';

export const initialState = {
  content: '',
  loading: true,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const createTweetFormReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CREATE_TWEET:
        draft.loading = true;
        draft.error = false;
        break;

      case CREATE_TWEET_SUCCESS:
        draft.loading = true;
        draft.error = false;
        break;

      case CREATE_TWEET_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;

      case UPDATE_CONTENT:
        draft.content = action.content;
        break;
    }
  });

export default createTweetFormReducer;
