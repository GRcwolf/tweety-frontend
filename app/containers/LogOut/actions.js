import { LOG_OUT, LOG_OUT_SUCCEEDED } from './constants';

export function destroySession() {
  return {
    type: LOG_OUT,
  };
}

export function logOutSucceeded() {
  return {
    type: LOG_OUT_SUCCEEDED,
  };
}
