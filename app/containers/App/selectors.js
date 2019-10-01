import { createSelector } from 'reselect';

const selectHeader = state => state.global;

export const makeSelectRedirect = () =>
  createSelector(
    selectHeader,
    globalState => globalState.redirect,
  );

export const makeSelectUser = () =>
  createSelector(
    selectHeader,
    globalState => globalState.user,
  );

export const makeSelectUserIsAurhenticated = () =>
  createSelector(
    selectHeader,
    globalState => globalState.user.authenticated,
  );
