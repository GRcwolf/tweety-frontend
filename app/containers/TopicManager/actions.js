import {
  GET_TOPICS,
  GET_TOPICS_SUCCESS,
  GET_TOPICS_ERROR,
  SET_TOPIC,
  SET_TOPIC_SUCCESS,
  SET_TOPIC_ERROR,
  SET_TOPIC_TO_SET,
  UNSET_TOPIC_TO_SET,
  CHANGE_TOPIC_NAME_TEXTAREA,
  CREATE_NEW_TOPIC,
  CREATE_NEW_TOPIC_SUCCESS,
} from './constants';

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

export function setTopic() {
  return {
    type: SET_TOPIC,
  };
}

export function setTopicSuccess(respose) {
  return {
    type: SET_TOPIC_SUCCESS,
    respose,
  };
}

export function setTopicError() {
  return {
    type: SET_TOPIC_ERROR,
  };
}

export function setTopicToSet(topicId) {
  return {
    type: SET_TOPIC_TO_SET,
    topicId,
  };
}

export function unsetTopicToSet() {
  return {
    type: UNSET_TOPIC_TO_SET,
  };
}

export function changeTopicNameTextarea(text) {
  return {
    type: CHANGE_TOPIC_NAME_TEXTAREA,
    text,
  };
}

export function createNewTopic(name) {
  return {
    type: CREATE_NEW_TOPIC,
    name,
  };
}

export function createTopicSuccess() {
  return {
    type: CREATE_NEW_TOPIC_SUCCESS,
  };
}
