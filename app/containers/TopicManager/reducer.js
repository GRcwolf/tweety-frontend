import produce from 'immer';
import { GET_TOPICS, GET_TOPICS_SUCCESS, GET_TOPICS_ERROR } from './constants';

export const initialState = {
  topics: [],
  topicsLoaded: false,
  loading: false,
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
        draft.topicsLoaded = true;
        draft.topics = action.topics;
        break;

      case GET_TOPICS_ERROR:
        draft.loading = false;
        break;
    }
  });

export default topicManagerReducer;
