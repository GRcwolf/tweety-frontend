import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectTweetsView = state => state.tweetsView || initialState;

export const makeSelectTweets = () =>
  createSelector(
    selectTweetsView,
    tweetsViewState => tweetsViewState.tweets,
  );

export const makeSelectTopic = () =>
  createSelector(
    selectTweetsView,
    tweetsViewState => tweetsViewState.activeTopic.topic,
  );

export const makeSelectTopicLoaded = () =>
  createSelector(
    selectTweetsView,
    tweetsViewState => tweetsViewState.topicLoaded,
  );

export const makeSelectTweetsLoaded = () =>
  createSelector(
    selectTweetsView,
    tweetsViewState => tweetsViewState.tweetsLoaded,
  );
