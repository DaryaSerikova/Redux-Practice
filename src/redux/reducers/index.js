import { combineReducers } from "redux";
import { currentMessage } from "./currentMessage";
import { allStore } from "./messageStore";
import { currentUser } from "./currentUser";


export default combineReducers({
  currentUser, //action.name
  currentMessage,
  allStore,
});