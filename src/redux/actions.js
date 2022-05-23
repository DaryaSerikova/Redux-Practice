// Actions

export const UPDATE_TO_NEW_CURRENT_MESSAGE = 'UPDATE_TO_NEW_CURRENT_MESSAGE';
export const ADD_NEW_MESSAGE_TO_STORE = 'ADD_NEW_MESSAGE_TO_STORE';
export const EDIT_MESSAGE_IN_STORE = 'EDIT_MESSAGE_IN_STORE';
export const REMOVE_MESSAGE_FROM_STORE = 'REMOVE_MESSAGE_FROM_STORE';
export const UPDATE_TO_NEW_CURRENT_USER = 'UPDATE_TO_NEW_CURRENT_USER';
export const ADD_NEW_USER_TO_STORE = 'ADD_NEW_USER_TO_STORE';



//Action Creators

export const updateToNewCurrentMessage = (newCurrentMessage) => ({
  type: UPDATE_TO_NEW_CURRENT_MESSAGE, //'current_message/updateToNewCurrentMessage'
  payload: newCurrentMessage
}); //message или value??? что лучше

export const addNewMessageToStore = (value, name) => ({
  type: ADD_NEW_MESSAGE_TO_STORE, //'message_store/addNewMessageToStore'
  value: value,
  name: name,
});

export const updateToNewCurrentUser = (name) => ({
  type: UPDATE_TO_NEW_CURRENT_USER,
  name
});

export const addNewUserToStore = (name) => ({
  type: ADD_NEW_USER_TO_STORE,
  name
})






// export const getCurrentValue = (newCurrentValue) => { //payload
//   return {
//       type: 'GET_CURRENT_VALUE', 
//       payload: newCurrentValue
//   };
// };

// export const resetState = () => ({ type: 'RESET_STATE' });

// export const putStoreMessage = (newMessage) => { //payload
//   return {
//       type: 'PUT_IN_MESSAGE_STORE',
//       payload: newMessage
//   };
// };
