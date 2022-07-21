import { combineReducers } from "redux";
import auth from "./auth/reducer";
import content from "./content/reducer";
import setting from "./settings/reducer";
import feed from "./feed/reducer";
const reducers = combineReducers({
  auth,
  feed,
  content,
  setting
});

export default reducers;
