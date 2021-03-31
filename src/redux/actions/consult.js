import types from '../types';
import store from '../store';
import { apiPost } from '../../utils/utils';
import { GET_USER } from '../../config/urls';
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
        apiPost(GET_USER, {searchType: 'LEADERBOARD', limit: "5" , skip: data.skip})
        .then((res)=>{
            dispatch({
                type: types.LOAD_MORE_DATA,
                payload: res.data
            })
            resolve(res)
        })
        .catch((error)=> {
            reject(error)
        })    
    })
};