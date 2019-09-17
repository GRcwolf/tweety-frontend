import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectUserObject = state => state.userObject || initialState;

/**
 * Select the language locale
 */

const makeSelectUserObject = () =>
  createSelector(
    selectUserObject,
    signUpPageState => signUpPageState.userObject,
  );

export { selectUserObject, makeSelectUserObject };
