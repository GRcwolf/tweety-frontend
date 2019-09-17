import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLoginData = state => state.loginData || initialState;

const makeSelectLoginData = () =>
  createSelector(
    selectLoginData,
    loginPageState => loginPageState.loginData,
  );

export { selectLoginData, makeSelectLoginData };
