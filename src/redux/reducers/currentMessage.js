import { 
  UPDATE_TO_NEW_CURRENT_MESSAGE,
} from "../actions";


export const currentMessage = (state = '', action) => {
  switch (action.type) {
    case UPDATE_TO_NEW_CURRENT_MESSAGE:

    default:
      return state;
  }
}