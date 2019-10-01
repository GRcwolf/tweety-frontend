import { GET_TOPIC, GET_TOPIC_SUCCESS, GET_TOPIC_ERROR } from './constants';

export function getTopic() {
  return {
    type: GET_TOPIC,
  };
}

export function getTopicSuccerded(topic) {
  return {
    type: GET_TOPIC_SUCCESS,
    topic,
  };
}

export function getTopicError(error) {
  return {
    type: GET_TOPIC_ERROR,
    error,
  };
}
