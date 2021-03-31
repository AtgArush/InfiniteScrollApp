import types from "../types"
import {darkTheme, lightTheme} from "../../styles/colors"
const initialState = {
    theme: {...lightTheme},
    currentTheme: "light"
}

export default function (state = initialState, action) {
    switch (action.type) {
        case types.SWITCH_THEME:
            if (action.payload == "dark") {
                return{
                    ...state, theme: lightTheme, currentTheme: "light"
                }
            }
            else{
                return{
                    ...state, theme: darkTheme, currentTheme: "dark"
                }
            }
        default:
            return{
                ...state
            }
    }
}