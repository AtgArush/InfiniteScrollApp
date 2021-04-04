import types from '../types';
import {darkTheme, lightTheme, greenTheme, yellowTheme} from '../../styles/colors';
const initialState = {
  theme: {...lightTheme},
  currentTheme: 'red',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SWITCH_THEME:
      switch (action.payload) {
        case 'red':
                      return{
              ...state, theme: lightTheme, currentTheme: "red"
          }
        case 'yellow':
                      return{
              ...state, theme: yellowTheme, currentTheme: "yellow"
          }
        case 'blue':
                      return{
              ...state, theme: darkTheme, currentTheme: "blue"
          }
        case 'green':
                      return{
              ...state, theme: greenTheme, currentTheme: "green"
          }
        default: 
        return{
          ...state
        }
      }
    default:
      return {
        ...state,
      };
  }
}
