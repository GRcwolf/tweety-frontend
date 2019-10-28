import prodce from 'immer';
import {
  GET_TOPIC,
  GET_TOPIC_SUCCESS,
  GET_TOPIC_ERROR,
  GET_TWEETS,
  GET_TWEETS_ERROR,
  GET_TWEETS_SUCCESS,
} from './constants';

export const initialState = {
  tweets: {},
  activeTopic: {
    id: '',
    topic: '',
  },
  loading: false,
  topicLoaded: false,
  tweetsLoaded: 0,
};

/* eslint-disable default-case, no-param-reassign */
const tweetsViewReducer = (state = initialState, action) =>
  prodce(state, draft => {
    switch (action.type) {
      case GET_TOPIC:
        draft.loading = true;
        draft.topicLoaded = false;
        break;

      case GET_TOPIC_SUCCESS:
        draft.activeTopic = action.topic;
        draft.loading = false;
        draft.topicLoaded = true;
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
    }
  });

export default tweetsViewReducer;
