import { call, put, takeLatest, select } from 'redux-saga/effects';
import { getTopics, setTopic, createTopic } from 'containers/Api';
import { errorMessage } from 'containers/App/actions';
import {
  GET_TOPICS,
  GET_TOPICS_ERROR_MESSAGE,
  SET_TOPIC,
  SET_TOPIC_ERROR_MESSAGE,
  CREATE_NEW_TOPIC,
  CREATE_NEW_TOPIC_ERROR_MESSAGE,
  CREATE_NEW_TOPIC_SUCCESS_MESSAGE,
} from './constants';
import { makeSelectTopicToSet, makeSelectNewTopicName } from './selector';
import {
  getTopicsError,
  getTopicsSuccess,
  setTopicSuccess,
  setTopicError,
  unsetTopicToSet,
  createTopicSuccess,
} from './actions';

export function* setTopicCall() {
  try {
    const topicToSet = yield select(makeSelectTopicToSet());
    const response = yield call(setTopic, topicToSet);
    yield put(setTopicSuccess(response));
    yield put(errorMessage(response.message));
  } catch {
    yield put(setTopicError());
    yield put(errorMessage(SET_TOPIC_ERROR_MESSAGE));
  }
  yield put(unsetTopicToSet());
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

export function* createTopicCall() {
  try {
    const topicName = yield select(makeSelectNewTopicName());
    const response = yield call(createTopic, topicName);
    if (response.type !== 'Error') {
      yield put(errorMessage(CREATE_NEW_TOPIC_SUCCESS_MESSAGE));
      yield put(createTopicSuccess());
      return;
    }
    if (response.message) {
      yield put(errorMessage(response.message));
      return;
    }
    yield put(errorMessage(CREATE_NEW_TOPIC_ERROR_MESSAGE));
  } catch {
    yield put(errorMessage(CREATE_NEW_TOPIC_ERROR_MESSAGE));
  }
}

export default function* topicsData() {
  yield takeLatest(GET_TOPICS, getTopicsCall);
  yield takeLatest(SET_TOPIC, setTopicCall);
  yield takeLatest(CREATE_NEW_TOPIC, createTopicCall);
}
