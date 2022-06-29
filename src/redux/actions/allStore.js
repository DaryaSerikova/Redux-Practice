import { getTime } from "../../utils/getTime";


export const ADD_NEW_MESSAGE_TO_STORE = 'ADD_NEW_MESSAGE_TO_STORE';
export const EDIT_MESSAGE_IN_STORE = 'EDIT_MESSAGE_IN_STORE';
export const CHOOSE_MESSAGE_IN_STORE = 'CHOOSE_MESSAGE_IN_STORE'///////////////////////////
export const REMOVE_MESSAGE_FROM_STORE = 'REMOVE_MESSAGE_FROM_STORE';
export const ADD_NEW_USER_TO_STORE = 'ADD_NEW_USER_TO_STORE';

export const REMOVE_GROUP_OF_MESSAGES_FROM_STORE = 'REMOVE_GROUP_OF_MESSAGES_FROM_STORE';
export const REPLY_ON_MESSAGE_FROM_STORE = 'REPLY_ON_MESSAGE_FROM_STORE';
export const FORWARD_GROUP_OF_MESSAGES_FROM_STORE = 'FORWARD_GROUP_OF_MESSAGES_FROM_STORE';




export const addNewMessageToStore = (value, name, edit, selected) => ({
  type: ADD_NEW_MESSAGE_TO_STORE, 
  value: value,
  name: name,
  date: getTime().date,
  time: getTime().time,
  edit: edit,
  selected: selected
});

export const editMessageInStore = (id, value, name, edit) => ({
  type: EDIT_MESSAGE_IN_STORE,
  id,
  value,
  name,
  edit,
  // selected
});

export const chooseMessageInStore = (id, // value, name, edit, 
  selected) => ({
  type: CHOOSE_MESSAGE_IN_STORE,
  id,
  // value,
  // name,
  // edit,
  selected
});

export const removeMessageFromStore = (id, name) => ({
  type: REMOVE_MESSAGE_FROM_STORE,
  id,
  name
});

export const addNewUserToStore = (name) => ({
  type: ADD_NEW_USER_TO_STORE,
  name
});




export const removeGroupOfMessagesFromStore = (arrayForwardIds, name) => ({
  type: REMOVE_GROUP_OF_MESSAGES_FROM_STORE,
  arrayForwardIds,
  name
});

export const replyOnMessageFromStore = (value, name, edit, selected, message) => ({
  type: REPLY_ON_MESSAGE_FROM_STORE, 
  value: value,
  name: name,
  date: getTime().date,
  time: getTime().time,
  edit: edit,
  selected: selected,
  message: message
});

export const forwardGroupOfMessagesFromStore = (value, name, edit, selected, messages) => ({
  type: FORWARD_GROUP_OF_MESSAGES_FROM_STORE, 
  value: value,
  name: name,
  date: getTime().date,
  time: getTime().time,
  edit: edit,
  selected: selected,
  messages: messages
});