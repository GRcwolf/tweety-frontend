import { call, put, takeLatest } from 'redux-saga/effects';
import { getActiveTopic, getTweets } from 'containers/Api';
import { errorMessage } from 'containers/App/actions';
import {
  GET_TOPIC,
  TWEET_GET_ERROR,
  GET_TWEETS,
  TOPIC_GET_ERROR,
} from './constants';
import {
  getTopicSuccerded,
  getTopicError,
  getTweetsSuccess,
  getTweetsError,
} from './actions';

export function* getTopicCall() {
  try {
    const response = yield call(getActiveTopic);
    yield put(getTopicSuccerded(response));
  } catch (error) {
    yield put(getTopicError());
    yield put(errorMessage(TOPIC_GET_ERROR));
  }
}

export function* getTweetsCall() {
  try {
    const response = yield call(getTweets);
    yield put(getTweetsSuccess(response));
  } catch (exception) {
    yield put(getTweetsError());
    yield put(errorMessage(TWEET_GET_ERROR));
  }
}

export default function* tweetData() {
  yield takeLatest(GET_TOPIC, getTopicCall);
  yield takeLatest(GET_TWEETS, getTweetsCall);
}
