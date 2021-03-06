import { call, put, select, takeLatest } from 'redux-saga/effects';
import { createUser } from 'containers/Api';
import { userSignedUp, errorMessage } from 'containers/App/actions';
import { SIGN_UP_USER, GENERIC_ERROR_MESSAGE } from 'containers/App/constants';
import { redirectUser } from './actions';
import {
  makeSelectEmail,
  makeSelectFirstName,
  makeSelectLastName,
  makeSelectPassword,
  makeSelectUserName,
} from './selectors';

export function* signUpUserCall() {
  const firstname = yield select(makeSelectFirstName());
  const lastname = yield select(makeSelectLastName());
  const username = yield select(makeSelectUserName());
  const email = yield select(makeSelectEmail());
  const password = btoa(yield select(makeSelectPassword()));
  let response;
  try {
    response = yield call(createUser, {
      firstname,
      lastname,
      username,
      email,
      password,
    });
    if (response.type === 'Error') {
      yield put(errorMessage(response.message));
      return;
    }
    yield put(userSignedUp(response));
    yield put(redirectUser('/login'));
  } catch (exception) {
    yield put(errorMessage(GENERIC_ERROR_MESSAGE));
  }
}

export default function* signUpData() {
  yield takeLatest(SIGN_UP_USER, signUpUserCall);
}
