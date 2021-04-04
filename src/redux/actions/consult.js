import types from '../types';
import store from '../store';
import {apiGet, apiPost} from '../../utils/utils';
import {GET_USER, SEARCH_USER} from '../../config/urls';
// import { reject } from 'lodash';
const {dispatch} = store;

export const fetchData = () => {
  return new Promise((resolve, reject) => {
    apiPost(GET_USER, {searchType: 'LEADERBOARD', limit: '10', skip: '0'})
      .then(res => {
        dispatch({
          type: types.GET_DATA_FROM_API,
          payload: res.data,
        });
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const loadData = data => {
  return new Promise((resolve, reject) => {
    apiPost(GET_USER, {
      searchType: 'LEADERBOARD',
      limit: '5',
      skip: data.skip,
    })
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const searchUser = searchString => {
  let getUrl = SEARCH_USER + `?name=${searchString}`;
  return apiGet(getUrl);
};

export const searchNearbyUser = (long, lat) => {
  let getUrl = SEARCH_USER + `?coordinates=["${long}", "${lat}"]`;
  return apiGet(getUrl);
};