export const ADD_TO_SELECTED_MESSAGES = 'ADD_TO_SELECTED_MESSAGES'; // SELECT_MESSAGE
export const RESET_SELECTED_MESSAGES = 'RESET_SELECTED_MESSAGES'; // SELECT_MESSAGE
export const REMOVE_MESSAGE_FROM_SELECTED_MESSAGES = 'REMOVE_MESSAGE_FROM_SELECTED_MESSAGES'; // SELECT_MESSAGE



export const addToSelectedMessages = (message) => ({ //addToForwardMessages
  type: ADD_TO_SELECTED_MESSAGES //ADD_TO_FORWARD_MESSAGES
});

export const resetSelectedMessages = () => ({ //resetForwardMessage
  type: RESET_SELECTED_MESSAGES, //RESET_FORWARD_MESSAGE
});

export const removeFromSelectedMessages = (id) => ({ //removeFromForwardMessage
  type: REMOVE_MESSAGE_FROM_SELECTED_MESSAGES, //REMOVE_MESSAGE_FROM_FORWARD_MESSAGE,
  id
});