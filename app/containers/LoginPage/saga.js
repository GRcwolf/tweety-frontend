import { call, put, select, takeLatest } from 'redux-saga/effects';
import { loginWithUsername, loginWithEmail } from 'containers/Api';
import { errorMessage, userLoggedIn } from 'containers/App/actions';
import { LOG_IN_USER, GENERIC_ERROR_MESSAGE } from 'containers/App/constants';
import { makeSelectLoginName, makeSelectPassword } from './selectors';

export function* logInUserCall() {
  // eslint-disable-next-line no-param-reassign
  const authName = yield select(makeSelectLoginName());
  const password = btoa(yield select(makeSelectPassword()));
  let response;
  try {
    if (authName.indexOf('@') === -1) {
      response = yield call(loginWithUsername, {
        username: authName,
        password,
      });
    } else {
      response = yield call(loginWithEmail, {
        email: authName,
        password,
      });
    }
    if (response.type === 'Error') {
      yield put(errorMessage(response.message));
      return;
    }
    yield put(userLoggedIn(response.message));
  } catch (exception) {
    yield put(errorMessage(GENERIC_ERROR_MESSAGE));
  }
}

export default function* logIn() {
  yield takeLatest(LOG_IN_USER, logInUserCall);
}
