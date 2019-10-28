import { GET_TOPICS, GET_TOPICS_SUCCESS, GET_TOPICS_ERROR } from './constants';

export function getTopics() {
  return {
    type: GET_TOPICS,
  };
}

export function getTopicsError() {
  return {
    type: GET_TOPICS_ERROR,
  };
}

export function getTopicsSuccess(topics) {
  return {
    type: GET_TOPICS_SUCCESS,
    topics,
  };
}
