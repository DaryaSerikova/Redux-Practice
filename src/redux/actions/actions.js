//Actions
export const UPDATE_TO_NEW_CURRENT_MESSAGE = 'UPDATE_TO_NEW_CURRENT_MESSAGE';
export const UPDATE_TO_NEW_CURRENT_USER = 'UPDATE_TO_NEW_CURRENT_USER';
export const UPDATE_TO_NEW_CURRENT_MESSAGE_ID = 'UPDATE_TO_NEW_CURRENT_MESSAGE_ID';
export const UPDATE_COORDINATES = 'UPDATE_COORDINATES';
export const SEARCHED_USERS = 'SEARCHED_USERS';
export const SEARCHED_MESSAGES = 'SEARCHED_MESSAGES';


export const HIDE_SETTINGS = 'HIDE_SETTINGS';
export const SHOW_SETTINGS = 'SHOW_SETTINGS';

export const HIDE_MESSAGE_SEARCHING = 'HIDE_MESSAGE_SEARCHING';
export const SHOW_MESSAGE_SEARCHING = 'SHOW_MESSAGE_SEARCHING';

export const HIDE_SELECTED_MESSAGE = 'HIDE_SELECTED_MESSAGE';
export const SHOW_SELECTED_MESSAGE = 'SHOW_SELECTED_MESSAGE';

export const UPDATE_TO_NEW_CURRENT_UNUSUAL_MESSAGE = 'UPDATE_TO_NEW_CURRENT_UNUSUAL_MESSAGE';

export const ANIMATION_STATE_IS_START = 'ANIMATION_STATE_IS_START';
export const ANIMATION_STATE_IS_END = 'ANIMATION_STATE_IS_END';
export const ANIMATION_STATE_IS_EMPTY = 'ANIMATION_STATE_IS_EMPTY';



export const ADD_LAST_SENT_MESSAGE = 'ADD_LAST_SENT_MESSAGE';



//Action Creators

export const updateToNewCurrentMessage = (value) => ({
  type: UPDATE_TO_NEW_CURRENT_MESSAGE, 
  value
});



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



export const hideSelectedMessage = (id) => ({
  type: HIDE_SELECTED_MESSAGE,
  id
});

export const showSelectedMessage = (id) => ({
  type: SHOW_SELECTED_MESSAGE,
  id
});

export const updateToNewCurrentUnusualMessage = (message) => ({
  type: UPDATE_TO_NEW_CURRENT_UNUSUAL_MESSAGE,
  message
}); 


export const animationStateIsStart = () => ({
  type: ANIMATION_STATE_IS_START,
});

export const animationStateIsEnd = () => ({
  type: ANIMATION_STATE_IS_END,
});

export const animationStateIsEmpty = () => ({
  type: ANIMATION_STATE_IS_EMPTY,
});
// ANIMATION_STATE_IS_START,
// ANIMATION_STATE_IS_END,
// ANIMATION_STATE_IS_EMPTY,





export const addLastSentMessage = (name, message) => ({
  type: ADD_LAST_SENT_MESSAGE,
  name,
  message,
})