//Action Creators

export const getCurrentValue = (newCurrentValue) => { //payload
  return {
      type: 'GET_CURRENT_VALUE', 
      payload: newCurrentValue
  };
};

export const resetState = () => ({ type: 'RESET_STATE' });

export const putStoreMessage = (newMessage) => { //payload
  return {
      type: 'PUT_IN_MESSAGE_STORE',
      payload: newMessage
  };
};
