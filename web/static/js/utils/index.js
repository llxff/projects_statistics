import fetch        from 'isomorphic-fetch';
import { polyfill } from 'es6-promise';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export function httpGet(url) {
  return fetch(url, {
    headers: defaultHeaders,
  })
    .then(checkStatus)
    .then(parseJSON);
}

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function parseJSON(response) {
  return response.json();
}
