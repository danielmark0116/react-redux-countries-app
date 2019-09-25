import * as types from './actionTypes';

export function getCountries() {
  return {
    type: types.GET_COUNTRIES
  };
}

export function getCountry(id) {
  return {
    type: types.GET_COUNTRIES,
    payload: id
  };
}

export function searchCountry(searchText) {
  return {
    type: types.SEARCH_COUNTRY,
    payload: searchText
  };
}

export function setContinent(nameOfContinent) {
  return {
    type: types.SET_CONTINENT,
    payload: nameOfContinent
  };
}

export function deleteCountry(id) {
  return {
    type: types.DELETE_COUNTRY,
    payload: id
  };
}
