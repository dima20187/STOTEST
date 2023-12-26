/* eslint-disable default-param-last */
import * as siteActions from "../actions/siteActions";

export const defaultState = {
  film: {},
  siteLoading: true,
  siteErrors: {},
};

const siteReducer = (state = defaultState, action) => {
  switch (action.type) {
    case siteActions.LOAD_SITE_SUCCESS: {
      return {
        ...state,
        film: action.payload,
        siteLoading: false,
        siteErrors: {},
      };
    }
    default:
      return state;
  }
};

export default siteReducer;
