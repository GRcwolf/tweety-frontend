import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCreateTweetForm = state => state.createTweetForm || initialState;

export const makeSelectTweetContent = () =>
  createSelector(
    selectCreateTweetForm,
    createTweetFormState => createTweetFormState.content,
  );
