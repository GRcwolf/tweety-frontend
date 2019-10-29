import { call, put, takeLatest, select } from 'redux-saga/effects';
import { getTopics, setTopic } from 'containers/Api';
import { errorMessage } from 'containers/App/actions';
import {
  GET_TOPICS,
  GET_TOPICS_ERROR_MESSAGE,
  SET_TOPIC,
  SET_TOPIC_ERROR_MESSAGE,
} from './constants';
import { makeSelectTopicToSet } from './selector';

import {
  getTopicsError,
  getTopicsSuccess,
  setTopicSuccess,
  setTopicError,
} from './actions';

export function* setTopicCall() {
  try {
    const topicToSet = yield select(makeSelectTopicToSet());
    const response = yield call(setTopic, topicToSet);
    yield put(setTopicSuccess(response));
  } catch {
    yield put(setTopicError());
    yield put(errorMessage(SET_TOPIC_ERROR_MESSAGE));
  }
}

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
  yield takeLatest(SET_TOPIC, setTopicCall);
}
