import { call, put, takeLatest } from 'redux-saga/effects';
import { getUserBySession, getUserById } from 'containers/Api';
import {
  CHECK_IF_USER_IS_AUTHENTICATED,
  USER_AUTH_CHECK_ERROR_MESSAGE,
} from './constants';
import {
  checkIfUserIsLoggedInSuccess,
  errorMessage,
  checkIfUserIsLoggedInSucceeeded,
} from './actions';

export function* getUserBySessionCall() {
  try {
    const userIdResponse = yield call(getUserBySession);
    if (userIdResponse && userIdResponse.type === 'Success') {
      const userResponse = yield call(getUserById, userIdResponse.message);
      yield put(checkIfUserIsLoggedInSuccess(userResponse));
      return;
    }
  } catch {
    yield put(errorMessage(USER_AUTH_CHECK_ERROR_MESSAGE));
  }
  yield put(checkIfUserIsLoggedInSucceeeded());
}

export default function* initialCalls() {
  yield takeLatest(CHECK_IF_USER_IS_AUTHENTICATED, getUserBySessionCall);
}
