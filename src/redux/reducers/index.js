import { combineReducers } from "redux";

import { allStore } from "./main/messageStore";
import { messageState } from "./main/messageState";
import { currentlySelectedMessages } from "./main/currentlySelectedMessages";

import { currentMessage } from "./currentSmth/currentMessage";
import { currentUser } from "./currentSmth/currentUser";
import { currentMessageId } from "./currentSmth/currentMessageId";
import { toggleMessageSearching } from "./toggles/toggleMessageSearching";
import { toggleSelectedMessage } from "./toggles/toggleSelectedMessage";
import { toggleSettings } from "./toggles/toggleSettings";
import { clickCoordinates } from "./others/clickCoordinates";
import { users } from "./others/users";
import { messages } from "./others/messages";
import { currentUnusualMessage } from "./currentSmth/currentUnusualMessage";
import { animationState } from "./main/animationState";
import { lastSentMessages } from "./others/lastSentMessages";
import { mobileState } from "./main/mobileState";



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
  currentlySelectedMessages,
  toggleSelectedMessage,
  currentUnusualMessage,
  animationState,
  lastSentMessages,
  mobileState,
});