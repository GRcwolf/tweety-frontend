import { call, put, takeLatest } from 'redux-saga/effects';
import { getActiveTopic } from 'containers/Api';
import { GET_TOPIC } from './constants';
import { getTopicSuccerded, getTopicError } from './actions';

export function* getTopicCall() {
  try {
    const response = yield call(getActiveTopic);
    yield put(getTopicSuccerded(response));
  } catch (error) {
    yield put(getTopicError(error));
  }
}

export default function* tweetData() {
  yield takeLatest(GET_TOPIC, getTopicCall);
}
