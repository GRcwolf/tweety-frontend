import { createSelector } from 'reselect';
import { initialState } from './reducer';

export const selectLoginData = state => state.loginPage || initialState;

export const makeSelectLoginName = () =>
  createSelector(
    selectLoginData,
    loginPageState => loginPageState.loginName,
  );

export const makeSelectPassword = () =>
  createSelector(
    selectLoginData,
    loginPageState => loginPageState.password,
  );
