import { combineReducers } from "redux";
import { currentMessage } from "./currentMessage";
import { messageStore } from "./messageStore";
import { currentUser } from "./currentUser";


export default combineReducers({
  currentUser, //action.name
  currentMessage,
  messageStore,
});