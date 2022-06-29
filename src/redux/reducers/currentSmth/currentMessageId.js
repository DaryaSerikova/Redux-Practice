import { 
  UPDATE_TO_NEW_CURRENT_MESSAGE_ID
} from "../../actions/actions";


export const currentMessageId = (state = '', action) => {
  switch (action.type) {
    case UPDATE_TO_NEW_CURRENT_MESSAGE_ID: 
      return action.id; 

    default:
      return state;
  }
}