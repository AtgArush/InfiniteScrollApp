import store from "../store"
import types from "../types"
import {apiPost, clearUserData, setUserData} from "../../utils/utils"
const {dispatch} = store

export const saveUserData = data => {
    dispatch({
        type: types.LOGIN,
        payload: data
    })
}

export const Login = data => {
    return new Promise((resolve, reject) => {
        apiPost( "https://api.talktier.com/user/v1/loginSignupOtp", data)
        .then((res)=>{
            resolve(res)
        })
        .catch((error)=>{
            reject(error)
        })
    })
}

export const logout = () => {
    clearUserData();
  dispatch({
    type: types.LOGOUT,
    payload: null,
  });
};

export const verifyOtp = data => {
    return new Promise((resolve, reject) => {
        apiPost("https://api.talktier.com/user/v1/verifyOtp", data)
        .then((res)=>{
            setUserData(res.data)
            .then((suc)=>{
                saveUserData(res.data)
                resolve(res.data)
            })
            .catch((error)=>{
                reject(error)
            })
        })
        .catch((error)=>{
            reject(error)
        })
    })
}
