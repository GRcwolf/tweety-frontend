import produce from 'immer';
import {
  GET_TOPICS,
  GET_TOPICS_SUCCESS,
  GET_TOPICS_ERROR,
  SET_TOPIC_TO_SET,
  UNSET_TOPIC_TO_SET,
  CHANGE_TOPIC_NAME_TEXTAREA,
  CREATE_NEW_TOPIC_SUCCESS,
} from './constants';

export const initialState = {
  topics: [],
  topicsLoaded: 0,
  loading: false,
  topicToSet: '',
  newTopicText: '',
};

/* eslint-disable default-case, no-param-reassign */
const topicManagerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_TOPICS:
        draft.loading = true;
        break;

      case GET_TOPICS_SUCCESS:
        draft.loading = false;
        draft.topicsLoaded = Date.now();
        draft.topics = action.topics;
        break;

      case GET_TOPICS_ERROR:
        draft.loading = false;
        break;

      case SET_TOPIC_TO_SET:
        draft.topicToSet = action.topicId;
        break;

      case UNSET_TOPIC_TO_SET:
        draft.topicToSet = '';
        draft.topicsLoaded = 0;
        break;

      case CHANGE_TOPIC_NAME_TEXTAREA:
        draft.newTopicText = action.text;
        break;

      case CREATE_NEW_TOPIC_SUCCESS:
        draft.topicsLoaded = 0;
        break;
    }
  });

export default topicManagerReducer;
