import {
  GET_TOPIC,
  GET_TOPIC_SUCCESS,
  GET_TOPIC_ERROR,
  GET_TWEETS,
  GET_TWEETS_SUCCESS,
  GET_TWEETS_ERROR,
} from './constants';

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

export function getTopicError() {
  return {
    type: GET_TOPIC_ERROR,
  };
}

export function getTweets() {
  return {
    type: GET_TWEETS,
  };
}

export function getTweetsSuccess(reponse) {
  return {
    type: GET_TWEETS_SUCCESS,
    tweets: reponse,
  };
}

export function getTweetsError() {
  return {
    type: GET_TWEETS_ERROR,
  };
}
