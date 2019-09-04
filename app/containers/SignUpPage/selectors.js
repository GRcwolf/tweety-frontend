import { createSelector } from 'reselect';
import signUpPageReducer, { initialState } from './reducer';

/**
 * Direct selector to the languageToggle state domain
 */
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
