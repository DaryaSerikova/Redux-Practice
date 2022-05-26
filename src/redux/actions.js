import { getTime } from "../utils/getTime";

//Actions
export const UPDATE_TO_NEW_CURRENT_MESSAGE = 'UPDATE_TO_NEW_CURRENT_MESSAGE';

export const UPDATE_TO_NEW_CURRENT_USER = 'UPDATE_TO_NEW_CURRENT_USER';

export const ADD_NEW_MESSAGE_TO_STORE = 'ADD_NEW_MESSAGE_TO_STORE';
export const EDIT_MESSAGE_IN_STORE = 'EDIT_MESSAGE_IN_STORE';
export const REMOVE_MESSAGE_FROM_STORE = 'REMOVE_MESSAGE_FROM_STORE';
export const ADD_NEW_USER_TO_STORE = 'ADD_NEW_USER_TO_STORE';

export const MESSAGE_STATE_IS_CREATE = 'MESSAGE_STATE_IS_CREATE';
export const MESSAGE_STATE_IS_EDIT = 'MESSAGE_STATE_IS_EDIT';

export const UPDATE_TO_NEW_CURRENT_MESSAGE_ID = 'UPDATE_TO_NEW_CURRENT_MESSAGE_ID';

export const HIDE_SETTINGS = 'HIDE_SETTINGS';
export const SHOW_SETTINGS = 'SHOW_SETTINGS';

export const UPDATE_COORDINATES = 'UPDATE_COORDINATES';

// export const MESSAGE_IS_EDITED = 'MESSAGE_IS_EDITED';
// export const MESSAGE_IS_NOT_EDITED = 'MESSAGE_IS_NOT_EDITED';

export const SEARCHED_USERS = 'SEARCHED_USERS';


//Action Creators

export const updateToNewCurrentMessage = (value) => ({
  type: UPDATE_TO_NEW_CURRENT_MESSAGE, 
  value
});

export const addNewMessageToStore = (value, name, edit) => ({
  type: ADD_NEW_MESSAGE_TO_STORE, 
  value: value,
  name: name,
  date: getTime().date,
  time: getTime().time,
  edit: edit
});

export const updateToNewCurrentUser = (name) => ({
  type: UPDATE_TO_NEW_CURRENT_USER,
  name
});

export const addNewUserToStore = (name) => ({
  type: ADD_NEW_USER_TO_STORE,
  name
});

export const editMessageInStore = (id, value, name, edit) => ({
  type: EDIT_MESSAGE_IN_STORE,
  id,
  value,
  name,
  edit
});

export const removeMessageFromStore = (id, name) => ({
  type: REMOVE_MESSAGE_FROM_STORE,
  id,
  name
})


//for stateMessage
export const messageStateIsCreate = () => ({
  type: MESSAGE_STATE_IS_CREATE
});

export const messageStateIsEdit = () => ({
  type: MESSAGE_STATE_IS_EDIT
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

// export const messageIsEdited = () => ({
//   type: MESSAGE_IS_EDITED
// });

// export const messageIsNotEdited = () => ({
//   type: MESSAGE_IS_NOT_EDITED
// });

export const updateSearchedUsers = (users) => ({
  type: SEARCHED_USERS,
  users
})

