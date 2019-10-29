import { createTweet } from 'containers/Api';
import { put, call, select, takeLatest } from 'redux-saga/effects';
import { errorMessage } from 'containers/App/actions';
import { makeSelectTweetContent } from './selectors';
import { createTweetSucceeded, createTweetError } from './actions';
import { CREATE_TWEET, CREATE_TWEET_ERROR_MESSAGE } from './constants';

export function* createTweetCall() {
  const content = yield select(makeSelectTweetContent());
  try {
    const response = yield call(createTweet, content);
    yield put(errorMessage(response.message));
    yield put(createTweetSucceeded());
  } catch (error) {
    yield put(errorMessage(CREATE_TWEET_ERROR_MESSAGE));
    yield put(createTweetError(error));
  }
}

export default function* tweetCreation() {
  yield takeLatest(CREATE_TWEET, createTweetCall);
}
