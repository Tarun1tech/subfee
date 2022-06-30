import { combineReducers } from "redux";
import auth from "./auth/reducer";
import content from "./content/reducer";

const reducers = combineReducers({
  auth,
  content
});

export default reducers;
