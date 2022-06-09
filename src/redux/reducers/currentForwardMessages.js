import { 
  // UPDATE_TO_NEW_CURRENT_FORWARD_MESSAGES,
  ADD_TO_FORWARD_MESSAGES
} from "../actions";


export const currentForwardMessages = (state = [], action) => {
  switch (action.type) {
    // case UPDATE_TO_NEW_CURRENT_FORWARD_MESSAGES: 
    //   return action.message;
    case ADD_TO_FORWARD_MESSAGES:
      return [
        ...state,
        action.message
      ]

    // UPDATE_TO_NEW_CURRENT_FORWARD_MESSAGES ??
    // REMOVE_FROM_FORWARD_MESSAGES
    // CANCEL_FORWARDING

    default:
      return state;
  }
}