import produce from 'immer';
import { LOG_OUT, LOG_OUT_SUCCEEDED } from './constants';

export const initialState = {
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const logOutReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOG_OUT:
        draft.loading = true;
        break;

      case LOG_OUT_SUCCEEDED:
        draft.loading = false;
        break;
    }
  });

export default logOutReducer;
