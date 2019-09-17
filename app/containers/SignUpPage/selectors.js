import { createSelector } from 'reselect';
import { initialState } from './reducer';

export const selectSignUpPage = state => state.signUpPage || initialState;

export const makeSelectUserName = () =>
  createSelector(
    selectSignUpPage,
    signUpPageState => signUpPageState.userName,
  );

export const makeSelectFirstName = () =>
  createSelector(
    selectSignUpPage,
    signUpPageState => signUpPageState.firstName,
  );

export const makeSelectLastName = () =>
  createSelector(
    selectSignUpPage,
    signUpPageState => signUpPageState.lastName,
  );

export const makeSelectPassword = () =>
  createSelector(
    selectSignUpPage,
    signUpPageState => signUpPageState.password,
  );

export const makeSelectConfirmPassword = () =>
  createSelector(
    selectSignUpPage,
    signUpPageState => signUpPageState.confirmPassword,
  );

export const makeSelectEmail = () =>
  createSelector(
    selectSignUpPage,
    signUpPageState => signUpPageState.email,
  );
