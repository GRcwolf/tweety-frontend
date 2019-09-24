import { call, put, takeLatest, select } from 'redux-saga/effects';
import { createUser } from 'containers/Api';
import { SIGN_UP_USER } from '../App/constants';
import { userSignedUp, userSignUpError } from '../App/actions';
import {
  makeSelectEmail,
  makeSelectFirstName,
  makeSelectLastName,
  makeSelectPassword,
  makeSelectUserName,
} from './selectors';

export function* signUpUserCall() {
  // eslint-disable-next-line no-param-reassign
  const firstname = yield select(makeSelectFirstName());
  const lastname = yield select(makeSelectLastName());
  const username = yield select(makeSelectUserName());
  const email = yield select(makeSelectEmail());
  const password = btoa(yield select(makeSelectPassword()));

  try {
    const response = yield call(
      createUser({
        firstname,
        lastname,
        username,
        email,
        password,
      }),
    );
    yield put(userSignedUp(response));
  } catch (error) {
    yield put(userSignUpError(error));
  }
}

export default function* signUpData() {
  yield takeLatest(SIGN_UP_USER, signUpUserCall);
}
