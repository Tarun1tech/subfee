import { combineReducers } from "redux";
import auth from "./auth/reducer";
import content from "./content/reducer";
import setting from "./settings/reducer";
import feed from "./feed/reducer";
import subscriber from "./subscriber/reducer";
import financial from "./financial/reducers";
const reducers = combineReducers({
  auth,
  feed,
  content,
  setting,
  subscriber,
  financial
});

export default reducers;
