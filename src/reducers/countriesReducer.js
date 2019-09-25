import * as types from '../actions/actionTypes';

import countriesData from '../data/countries.json';

const initialState = {
  countries: countriesData
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COUNTRIES:
      return { ...state };
    default:
      return state;
  }
};

export default countriesReducer;
