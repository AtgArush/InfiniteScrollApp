import types from '../types';
import {darkTheme, lightTheme, greenTheme, yellowTheme} from '../../styles/colors';
const initialState = {
  theme: {...lightTheme},
  currentTheme: 'red',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SWITCH_THEME:
      console.log(action);
      // if (action.payload == "dark") {
      //     return{
      //         ...state, theme: lightTheme, currentTheme: "light"
      //     }
      // }
      // else{
      //     return{
      //         ...state, theme: darkTheme, currentTheme: "dark"
      //     }
      // }
      switch (action.payload) {
        case 'red':
                      return{
              ...state, theme: lightTheme, currentTheme: "red"
          }
          break;
        case 'yellow':
                      return{
              ...state, theme: yellowTheme, currentTheme: "yellow"
          }
          break;
        case 'blue':
                      return{
              ...state, theme: darkTheme, currentTheme: "blue"
          }
          break;
        case 'green':
                      return{
              ...state, theme: greenTheme, currentTheme: "green"
          }
          break;

        default:
          break;
      }
    default:
      return {
        ...state,
      };
  }
}
