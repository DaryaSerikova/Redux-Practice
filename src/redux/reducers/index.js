import { combineReducers } from "redux";

import { currentMessage } from "./currentMessage";
import { allStore } from "./messageStore";
import { currentUser } from "./currentUser";
import { messageState } from "./messageState";
import { currentMessageId } from "./currentMessageId";
import { toggleSettings } from "./toggleSettings";
import { clickCoordinates } from "./clickCoordinates";
import { users } from "./users";
import { messages } from "./messages";
import { toggleMessageSearching } from "./toggleMessageSearching";

// import { currentForwardMessages } from "./currentForwardMessages";
import { currentlySelectedMessages } from "./currentlySelectedMessages";

import { toggleSelectedMessage } from "./toggleSelectedMessage";
import { lastSentMessages } from "./lastSentMessages";


export default combineReducers({
  currentUser,
  currentMessage,
  allStore,
  messageState,
  currentMessageId,
  toggleSettings,
  clickCoordinates,
  users,
  messages,
  toggleMessageSearching,

  // currentForwardMessages,
  currentlySelectedMessages,

  toggleSelectedMessage,
  lastSentMessages,
});