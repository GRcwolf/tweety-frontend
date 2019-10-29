import { createSelector } from 'reselect';

const selectGlobal = state => state.global;

export const makeSelectRedirect = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.redirect,
  );

export const makeSelectUser = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.user,
  );

export const makeSelectUserIsAurhenticated = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.user.authenticated,
  );

export const makeSelectErrors = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.errors,
  );

export const makeSelectUsers = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.cache.users,
  );

export const makeSelectUsersToGet = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.cache.usersToGet,
  );

export const makeSelectInitialCheck = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.initialAuthCheck,
  );
