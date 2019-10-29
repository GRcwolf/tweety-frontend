import { call, put, takeLatest } from 'redux-saga/effects';
import { sessionDestroy } from 'containers/Api';
import { errorMessage, logOut } from 'containers/App/actions';
import { LOG_OUT, SESSION_DESTRUCTION_ERROR_MESSAGE } from './constants';
import { logOutSucceeded } from './actions';

export function* sessionDestructionCall() {
  try {
    const response = yield call(sessionDestroy);
    yield put(errorMessage(response.message));
  } catch {
    yield put(errorMessage(SESSION_DESTRUCTION_ERROR_MESSAGE));
  }
  yield put(logOut());
  yield put(logOutSucceeded());
}

export default function* LogOutCalls() {
  yield takeLatest(LOG_OUT, sessionDestructionCall);
}
