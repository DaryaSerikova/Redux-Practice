import { getIndex } from "../../utils/getIndex";
import { 
  // UPDATE_TO_NEW_CURRENT_FORWARD_MESSAGES,

  // ADD_TO_FORWARD_MESSAGES,
  ADD_TO_SELECTED_MESSAGES,
  RESET_FORWARD_MESSAGE,

  REMOVE_MESSAGE_FROM_SELECTED_MESSAGES,
  // REMOVE_MESSAGE_FROM_FORWARD_MESSAGE,
} from "../actions";

const getUniqueArray = (arr) => {
  let s = new Set(arr);
  let result = Array.from(s);
  return result
}


export const currentlySelectedMessages = (state = [], action) => {
  switch (action.type) {
    // case UPDATE_TO_NEW_CURRENT_FORWARD_MESSAGES: 
    //   return action.message;

    case ADD_TO_SELECTED_MESSAGES: //ADD_TO_SELECTED_MESSAGES //ADD_TO_FORWARD_MESSAGES 
      let res = getUniqueArray([
        ...state,
        action.message
      ])
      return res

    case REMOVE_MESSAGE_FROM_SELECTED_MESSAGES: //REMOVE_MESSAGE_FROM_FORWARD_MESSAGE: //REMOVE_MESSAGE_FROM_SELECTED_MESSAGE
      let array = state;
      const index = getIndex(action.id, array);//
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]

    case RESET_FORWARD_MESSAGE:
      return []

    // UPDATE_TO_NEW_CURRENT_FORWARD_MESSAGES ??
    // CANCEL_FORWARDING

    default:
      return state;
  }
}