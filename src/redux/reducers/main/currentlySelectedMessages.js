import { getIndex } from "../../../utils/getIndex";
import { 
  ADD_TO_SELECTED_MESSAGES,
  RESET_SELECTED_MESSAGES,
  REMOVE_MESSAGE_FROM_SELECTED_MESSAGES,
} from "../../actions/currentlySelectedMessages";

const getUniqueArray = (arr) => {
  let s = new Set(arr);
  let result = Array.from(s);
  return result
}


export const currentlySelectedMessages = (state = [], action) => {
  switch (action.type) {

    case ADD_TO_SELECTED_MESSAGES: 
      let res = getUniqueArray([
        ...state,
        action.message
      ])
      return res

    case REMOVE_MESSAGE_FROM_SELECTED_MESSAGES: 
      let array = state;
      const index = getIndex(action.id, array);//
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]

    case RESET_SELECTED_MESSAGES: 
      return []


    default:
      return state;
  }
}