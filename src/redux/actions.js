//Action Creators

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

//// ПЕРЕПИСАННЫЕ actions:

export const updateToNewCurrentMessage = (newCurrentMessage) => {
  return {
    type: 'current_message/updateToNewCurrentMessage',
    payload: newCurrentMessage
  }
} //message или value??? что лучше

export const addNewMessage = (newCurrentMessage) => {
  return {
    type: 'message_store/addNewMessage',
    payload: newCurrentMessage
  }
}