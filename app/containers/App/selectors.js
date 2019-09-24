import { createSelector } from 'reselect';

const selectRouter = state => state.global;

const makeSelectRedirect = () =>
  createSelector(
    selectRouter,
    globalState => globalState.redirect,
  );

export { makeSelectRedirect };
