export const ADD_TO_SELECTED_MESSAGES = 'ADD_TO_SELECTED_MESSAGES';
export const RESET_SELECTED_MESSAGES = 'RESET_SELECTED_MESSAGES';
export const REMOVE_MESSAGE_FROM_SELECTED_MESSAGES = 'REMOVE_MESSAGE_FROM_SELECTED_MESSAGES';



export const addToSelectedMessages = (message) => ({
  type: ADD_TO_SELECTED_MESSAGES,
});

export const resetSelectedMessages = () => ({
  type: RESET_SELECTED_MESSAGES,
});

export const removeFromSelectedMessages = (id) => ({
  type: REMOVE_MESSAGE_FROM_SELECTED_MESSAGES,
  id
});