import store from "../store"
import types from "../types"

const initialState = {
    userData : {}
}

export default function (state = initialState, action){
    switch (action.type) {
        case types.LOGIN:
            return {userData: action.payload}    
        default:
            return{...state}
    }
}
