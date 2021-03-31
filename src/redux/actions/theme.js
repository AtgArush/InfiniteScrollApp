import store from "../store"
import types from "../types"

const {dispatch} = store

export const changeTheme = (data) => (
    dispatch({
        type: types.SWITCH_THEME,
        payload: data
    })
)
