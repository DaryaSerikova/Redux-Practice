import { getTime } from "../../utils/getTime";



import { messages } from "../reducers/messages";

//Actions
export const UPDATE_TO_NEW_CURRENT_MESSAGE = 'UPDATE_TO_NEW_CURRENT_MESSAGE';

export const UPDATE_TO_NEW_CURRENT_USER = 'UPDATE_TO_NEW_CURRENT_USER';



// export const ADD_NEW_MESSAGE_TO_STORE = 'ADD_NEW_MESSAGE_TO_STORE';
// export const EDIT_MESSAGE_IN_STORE = 'EDIT_MESSAGE_IN_STORE';
// export const CHOOSE_MESSAGE_IN_STORE = 'CHOOSE_MESSAGE_IN_STORE'///////////////////////////
// export const REMOVE_MESSAGE_FROM_STORE = 'REMOVE_MESSAGE_FROM_STORE';
// export const ADD_NEW_USER_TO_STORE = 'ADD_NEW_USER_TO_STORE';

// export const REMOVE_GROUP_OF_MESSAGES_FROM_STORE = 'REMOVE_GROUP_OF_MESSAGES_FROM_STORE';
// export const REPLY_ON_MESSAGE_FROM_STORE = 'REPLY_ON_MESSAGE_FROM_STORE';
// export const FORWARD_GROUP_OF_MESSAGES_FROM_STORE = 'FORWARD_GROUP_OF_MESSAGES_FROM_STORE';





export const UPDATE_TO_NEW_CURRENT_MESSAGE_ID = 'UPDATE_TO_NEW_CURRENT_MESSAGE_ID';

export const HIDE_SETTINGS = 'HIDE_SETTINGS';
export const SHOW_SETTINGS = 'SHOW_SETTINGS';

export const UPDATE_COORDINATES = 'UPDATE_COORDINATES';

export const SEARCHED_USERS = 'SEARCHED_USERS';

export const SEARCHED_MESSAGES = 'SEARCHED_MESSAGES';

export const HIDE_MESSAGE_SEARCHING = 'HIDE_MESSAGE_SEARCHING';
export const SHOW_MESSAGE_SEARCHING = 'SHOW_MESSAGE_SEARCHING';



// export const ADD_TO_FORWARD_MESSAGES = 'ADD_TO_FORWARD_MESSAGES'; // SELECT_MESSAGE
export const ADD_TO_SELECTED_MESSAGES = 'ADD_TO_SELECTED_MESSAGES'; // SELECT_MESSAGE
 
// export const RESET_FORWARD_MESSAGE = 'RESET_FORWARD_MESSAGE'; // SELECT_MESSAGE
export const RESET_SELECTED_MESSAGES = 'RESET_SELECTED_MESSAGES'; // SELECT_MESSAGE

// export const REMOVE_MESSAGE_FROM_FORWARD_MESSAGE = 'REMOVE_MESSAGE_FROM_FORWARD_MESSAGE'; // SELECT_MESSAGE
export const REMOVE_MESSAGE_FROM_SELECTED_MESSAGES = 'REMOVE_MESSAGE_FROM_SELECTED_MESSAGES'; // SELECT_MESSAGE



export const HIDE_SELECTED_MESSAGE = 'HIDE_SELECTED_MESSAGE';
export const SHOW_SELECTED_MESSAGE = 'SHOW_SELECTED_MESSAGE';





export const ADD_LAST_SENT_MESSAGE = 'ADD_LAST_SENT_MESSAGE';



//Action Creators

export const updateToNewCurrentMessage = (value) => ({
  type: UPDATE_TO_NEW_CURRENT_MESSAGE, 
  value
});




// export const removeGroupOfMessagesFromStore = (arrayForwardIds, name) => ({
//   type: REMOVE_GROUP_OF_MESSAGES_FROM_STORE,
//   arrayForwardIds,
//   name
// });

// export const replyOnMessageFromStore = (value, name, edit, selected, message) => ({
//   type: REPLY_ON_MESSAGE_FROM_STORE, 
//   value: value,
//   name: name,
//   date: getTime().date,
//   time: getTime().time,
//   edit: edit,
//   selected: selected,
//   message: message
// });

// export const forwardGroupOfMessagesFromStore = (value, name, edit, selected, messages) => ({
//   type: FORWARD_GROUP_OF_MESSAGES_FROM_STORE, 
//   value: value,
//   name: name,
//   date: getTime().date,
//   time: getTime().time,
//   edit: edit,
//   selected: selected,
//   messages: messages
// });








export const updateToNewCurrentUser = (name) => ({
  type: UPDATE_TO_NEW_CURRENT_USER,
  name
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

export const addToSelectedMessages = (message) => ({ //addToForwardMessages
  type: ADD_TO_SELECTED_MESSAGES //ADD_TO_FORWARD_MESSAGES
})


export const hideSelectedMessage = (id) => ({
  type: HIDE_SELECTED_MESSAGE,
  id
});

export const showSelectedMessage = (id) => ({
  type: SHOW_SELECTED_MESSAGE,
  id
});

export const resetSelectedMessages = () => ({ //resetForwardMessage
  type: RESET_SELECTED_MESSAGES, //RESET_FORWARD_MESSAGE
});

export const removeFromSelectedMessages = (id) => ({ //removeFromForwardMessage
  type: REMOVE_MESSAGE_FROM_SELECTED_MESSAGES, //REMOVE_MESSAGE_FROM_FORWARD_MESSAGE,
  id
});




export const addLastSentMessage = (name, message) => ({
  type: ADD_LAST_SENT_MESSAGE,
  name,
  message,
})