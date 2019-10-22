import { createTweet } from 'containers/Api';
import { put, call, select, takeLatest } from 'redux-saga/effects';
import { makeSelectTweetContent } from './selectors';
import { createTweetSucceeded, createTweetError } from './actions';
import { CREATE_TWEET } from './constants';

export function* createTweetCall() {
  const content = yield select(makeSelectTweetContent());
  try {
    yield call(createTweet(content));
    yield put(createTweetSucceeded());
  } catch (error) {
    yield put(createTweetError(error));
  }
}

export default function* tweetCreation() {
  yield takeLatest(CREATE_TWEET, createTweetCall);
}
