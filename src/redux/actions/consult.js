import types from '../types';
import store from '../store';
import {apiGet, apiPost} from '../../utils/utils';
import {GET_USER, SEARCH_USER} from '../../config/urls';
// import { reject } from 'lodash';
const {dispatch} = store;

export const fetchData = () => {
    // apiPost(GET_USER, {searchType: 'LEADERBOARD', limit: '5', skip: "0"})
    // .then((res)=>{
    //     dispatch({
    //         type: "GET_DATA_FROM_API",
    //         payload: res.data
    //     })
    // })
    // .catch((error)=>{
    //     console.log(error)
    // })

    return new Promise((resolve, reject) => {
        apiPost(GET_USER, {searchType: 'LEADERBOARD', limit: '10', skip: "0"})
        .then((res)=>{
            dispatch({
                type: types.GET_DATA_FROM_API,
                payload: res.data
            })
            resolve(res)
        })
          .catch((error) => {
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
        console.log(res, 'consult Actions Res');
        resolve(res);
      })
      .catch(error => {
        console.log(error, 'consult Actions Error');
        reject(error);
      });
  });
};

export const searchUser = searchString => {
  console.log(searchString);
  let getUrl = SEARCH_USER + `?name=${searchString}`;
  console.log(getUrl);
  return apiGet(getUrl);
};

export const searchNearbyUser = (long, lat) => {
  // https://api.talktier.com/user/v1/getUserNearMe?coordinates=["0", "0"]
  // console.log(searchString);
  let getUrl = SEARCH_USER + `?coordinates=["${long}", "${lat}"]`;
  console.log(getUrl);
  return apiGet(getUrl);
};