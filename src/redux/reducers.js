import { combineReducers } from "redux";
import auth from "./auth/reducer";
import content from "./content/reducer";
import setting from "./settings/reducer";
const reducers = combineReducers({
  auth,
  content,
  setting
});

export default reducers;
