import { 
  SEARCHED_MESSAGES
} from "../actions";



export const messages = (state = [], action) => { //state = []
  switch (action.type) {
    case SEARCHED_MESSAGES: 
      return action.messages;

    default:
      return state;
  }
}