import { getTime } from "../utils/getTime";
import { messages } from "./reducers/messages";

//Actions
export const UPDATE_TO_NEW_CURRENT_MESSAGE = 'UPDATE_TO_NEW_CURRENT_MESSAGE';

export const UPDATE_TO_NEW_CURRENT_USER = 'UPDATE_TO_NEW_CURRENT_USER';

export const ADD_NEW_MESSAGE_TO_STORE = 'ADD_NEW_MESSAGE_TO_STORE';
export const EDIT_MESSAGE_IN_STORE = 'EDIT_MESSAGE_IN_STORE';
export const CHOOSE_MESSAGE_IN_STORE = 'CHOOSE_MESSAGE_IN_STORE'///////////////////////////
export const REMOVE_MESSAGE_FROM_STORE = 'REMOVE_MESSAGE_FROM_STORE';
export const ADD_NEW_USER_TO_STORE = 'ADD_NEW_USER_TO_STORE';

export const MESSAGE_STATE_IS_CREATE = 'MESSAGE_STATE_IS_CREATE';
export const MESSAGE_STATE_IS_EDIT = 'MESSAGE_STATE_IS_EDIT';
export const MESSAGE_STATE_IS_FORWARD = 'MESSAGE_STATE_IS_FORWARD'; ///////////////////////////
export const MESSAGE_STATE_IS_EMPTY = 'MESSAGE_STATE_IS_EMPTY';

export const UPDATE_TO_NEW_CURRENT_MESSAGE_ID = 'UPDATE_TO_NEW_CURRENT_MESSAGE_ID';

export const HIDE_SETTINGS = 'HIDE_SETTINGS';
export const SHOW_SETTINGS = 'SHOW_SETTINGS';

export const UPDATE_COORDINATES = 'UPDATE_COORDINATES';

export const SEARCHED_USERS = 'SEARCHED_USERS';

export const SEARCHED_MESSAGES = 'SEARCHED_MESSAGES';

export const HIDE_MESSAGE_SEARCHING = 'HIDE_MESSAGE_SEARCHING';
export const SHOW_MESSAGE_SEARCHING = 'SHOW_MESSAGE_SEARCHING';

export const ADD_TO_FORWARD_MESSAGES = 'ADD_TO_FORWARD_MESSAGES'; // SELECT_MESSAGE
export const RESET_FORWARD_MESSAGE = 'RESET_FORWARD_MESSAGE'; // SELECT_MESSAGE
export const REMOVE_MESSAGE_FROM_FORWARD_MESSAGE = 'REMOVE_MESSAGE_FROM_FORWARD_MESSAGE'; // SELECT_MESSAGE

export const HIDE_SELECTED_MESSAGE = 'HIDE_SELECTED_MESSAGE';
export const SHOW_SELECTED_MESSAGE = 'SHOW_SELECTED_MESSAGE';

export const REMOVE_GROUP_OF_MESSAGES_FROM_STORE = 'REMOVE_GROUP_OF_MESSAGES_FROM_STORE';
export const REPLY_ON_MESSAGE_FROM_STORE = 'REPLY_ON_MESSAGE_FROM_STORE';



//Action Creators

export const updateToNewCurrentMessage = (value) => ({
  type: UPDATE_TO_NEW_CURRENT_MESSAGE, 
  value
});


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

export const chooseMessageInStore = (id, 
  // value, name, edit, 
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
})


export const addNewUserToStore = (name) => ({
  type: ADD_NEW_USER_TO_STORE,
  name
});

export const updateToNewCurrentUser = (name) => ({
  type: UPDATE_TO_NEW_CURRENT_USER,
  name
});


//for stateMessage
export const messageStateIsCreate = () => ({
  type: MESSAGE_STATE_IS_CREATE
});

export const messageStateIsEdit = () => ({
  type: MESSAGE_STATE_IS_EDIT
});

export const messageStateIsForward = () => ({
  type: MESSAGE_STATE_IS_FORWARD
});

export const messageStateIsEmpty = () => ({
  type: MESSAGE_STATE_IS_EMPTY
});


export const updateToNewCurrentMessageId = (id) => ({
  type: UPDATE_TO_NEW_CURRENT_MESSAGE_ID,
  id
});


export const hideSettings = () => ({
  type: HIDE_SETTINGS
});

export const showSettings = () => ({
  type: SHOW_SETTINGS
});


export const updateCoordinates = (x, y) => ({
  type: UPDATE_COORDINATES,
  x,
  y
});

export const updateSearchedUsers = (users) => ({
  type: SEARCHED_USERS,
  users
});

export const updateSearchedMessages = (messages) => ({
  type: SEARCHED_MESSAGES,
  messages
});


export const hideMessageSearching = () => ({
  type: HIDE_MESSAGE_SEARCHING
});

export const showMessageSearching = () => ({
  type: SHOW_MESSAGE_SEARCHING
});

export const addToForwardMessages = (message) => ({
  type: ADD_TO_FORWARD_MESSAGES
})


export const hideSelectedMessage = (id) => ({
  type: HIDE_SELECTED_MESSAGE,
  id
});

export const showSelectedMessage = (id) => ({
  type: SHOW_SELECTED_MESSAGE,
  id
});

export const resetForwardMessage = () => ({
  type: RESET_FORWARD_MESSAGE
});

export const removeFromForwardMessage = (id) => ({
  type: REMOVE_MESSAGE_FROM_FORWARD_MESSAGE,
  id
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
