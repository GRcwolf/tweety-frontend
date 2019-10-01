import { call, put, select, takeLatest } from 'redux-saga/effects';
import { loginWithUsername, loginWithEmail } from 'containers/Api';
import { LOG_IN_USER } from '../App/constants';
import { userLoggedIn } from '../App/actions';
import { makeSelectLoginName, makeSelectPassword } from './selectors';

export function* logInUserCall() {
  // eslint-disable-next-line no-param-reassign
  const authName = yield select(makeSelectLoginName());
  const password = btoa(yield select(makeSelectPassword()));
  let response;
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
  yield put(userLoggedIn(response.message));
}

export default function* logIn() {
  yield takeLatest(LOG_IN_USER, logInUserCall);
}
