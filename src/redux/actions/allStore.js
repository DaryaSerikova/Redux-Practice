import { getTime } from "../../utils/getTime";


export const ADD_NEW_MESSAGE_TO_STORE = 'ADD_NEW_MESSAGE_TO_STORE';
export const EDIT_MESSAGE_IN_STORE = 'EDIT_MESSAGE_IN_STORE';
export const CHOOSE_MESSAGE_IN_STORE = 'CHOOSE_MESSAGE_IN_STORE'///////////////////////////
export const REMOVE_MESSAGE_FROM_STORE = 'REMOVE_MESSAGE_FROM_STORE';
export const ADD_NEW_USER_TO_STORE = 'ADD_NEW_USER_TO_STORE';




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