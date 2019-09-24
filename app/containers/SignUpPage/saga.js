import { call, put } from 'redux-saga/effects';
import { createUser } from '../Api';

import { signUp } from './actions';

export function* signUpUser({
  firstname,
  lastname,
  username,
  email,
  password,
}) {
  // eslint-disable-next-line no-param-reassign
  password = btoa(password);

  const responseData = yield call(
    createUser({
      firstname,
      lastname,
      username,
      email,
      password,
    }),
  );
  yield put(signUp(responseData));
}
