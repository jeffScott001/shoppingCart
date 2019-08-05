import { combineReducers } from "redux";
import shoeReducer from "./shoeReducer";

export default combineReducers({
  shoes: shoeReducer
});
