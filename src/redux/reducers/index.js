import { combineReducers } from 'redux';
import auth from "./auth";
import consult from "./consult"
import theme from "./theme"
const appReducer = combineReducers({
  auth,
  consult,
  theme
});

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer;