import prodce from 'immer';
import { GET_TOPIC, GET_TOPIC_SUCCESS, GET_TOPIC_ERROR } from './constants';

export const initialState = {
  tweets: [],
  activeTopic: '',
  loading: false,
  error: false,
  topicLoaded: false,
};

/* eslint-disable default-case, no-param-reassign */
const tweetsViewReducer = (state = initialState, action) =>
  prodce(state, draft => {
    switch (action.type) {
      case GET_TOPIC:
        draft.loading = true;
        draft.error = false;
        draft.topicLoaded = false;
        break;

      case GET_TOPIC_SUCCESS:
        draft.activeTopic = action.topic;
        draft.loading = false;
        draft.error = false;
        draft.topicLoaded = true;
        break;

      case GET_TOPIC_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default tweetsViewReducer;
