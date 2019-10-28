import { call, put, takeLatest } from 'redux-saga/effects';
import { getTopics } from 'containers/Api';
import { errorMessage } from 'containers/App/actions';
import { GET_TOPICS, GET_TOPICS_ERROR_MESSAGE } from './constants';

import { getTopicsError, getTopicsSuccess } from './actions';

export function* getTopicsCall() {
  try {
    const response = yield call(getTopics);
    yield put(getTopicsSuccess(response));
  } catch (exception) {
    yield put(getTopicsError());
    yield put(errorMessage(GET_TOPICS_ERROR_MESSAGE));
  }
}

export default function* topicsData() {
  yield takeLatest(GET_TOPICS, getTopicsCall);
}
