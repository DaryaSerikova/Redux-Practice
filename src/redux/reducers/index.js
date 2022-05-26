import { combineReducers } from "redux";

import { currentMessage } from "./currentMessage";
import { allStore } from "./messageStore";
import { currentUser } from "./currentUser";
import { messageState } from "./stateMessage";
import { currentMessageId } from "./currentMessageId";
import { toggleSettings } from "./toggleSettings";
import { clickCoordinates } from "./clickCoordinates";
// import { edited } from "./edited";
import { users } from "./users";


export default combineReducers({
  currentUser,
  currentMessage,
  allStore,
  messageState,
  currentMessageId,
  toggleSettings,
  clickCoordinates,
  // edited,
  users
});