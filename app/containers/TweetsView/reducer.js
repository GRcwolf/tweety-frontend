import prodce from 'immer';
import {
  GET_TOPIC,
  GET_TOPIC_SUCCESS,
  GET_TOPIC_ERROR,
  GET_TWEETS,
  GET_TWEETS_ERROR,
  GET_TWEETS_SUCCESS,
  REFRESH_TOPIC,
} from './constants';

export const initialState = {
  tweets: {},
  activeTopic: {
    id: '',
    topic: '',
  },
  loading: false,
  topicLoaded: 0,
  tweetsLoaded: 0,
};

/* eslint-disable default-case, no-param-reassign */
const tweetsViewReducer = (state = initialState, action) =>
  prodce(state, draft => {
    switch (action.type) {
      case GET_TOPIC:
        draft.loading = true;
        break;

      case GET_TOPIC_SUCCESS:
        draft.activeTopic = action.topic;
        draft.loading = false;
        draft.topicLoaded = Date.now();
        break;

      case GET_TOPIC_ERROR:
        draft.loading = false;
        break;

      case GET_TWEETS:
        draft.loading = true;
        break;

      case GET_TWEETS_SUCCESS:
        draft.loading = false;
        draft.tweets = action.tweets;
        draft.tweetsLoaded = Date.now();
        break;

      case GET_TWEETS_ERROR:
        draft.loading = false;
        break;

      case REFRESH_TOPIC:
        draft.topicLoaded = 0;
        draft.tweetsLoaded = 0;
        break;
    }
  });

export default tweetsViewReducer;
