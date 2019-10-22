import {
  CREATE_TWEET,
  UPDATE_CONTENT,
  CREATE_TWEET_SUCCESS,
  CREATE_TWEET_ERROR,
} from './constants';

export function createTweet() {
  return {
    type: CREATE_TWEET,
  };
}

export function createTweetSucceeded() {
  return {
    type: CREATE_TWEET_SUCCESS,
  };
}

export function createTweetError(error) {
  return {
    type: CREATE_TWEET_ERROR,
    error,
  };
}

export function updateContent(content) {
  return {
    type: UPDATE_CONTENT,
    content,
  };
}
