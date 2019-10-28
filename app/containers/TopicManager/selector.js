import { createSelector } from 'reselect';
import { initialState } from './reducer';

export const selectTopicManager = state => state.topicManager || initialState;

export const makeSelectTopics = () =>
  createSelector(
    selectTopicManager,
    topicManagerState => topicManagerState.topics,
  );

export const makeSelectTopicsLoaded = () =>
  createSelector(
    selectTopicManager,
    topicManagerState => topicManagerState.topicsLoaded,
  );
