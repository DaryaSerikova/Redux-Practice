import { 
  ADD_LAST_SENT_MESSAGE,

} from "../actions/actions";



export const lastSentMessages = (state = [], action) => { //state = []
  switch (action.type) {
    case ADD_LAST_SENT_MESSAGE:
      return {
        [action.name]: {
          ...action.message
        }
      }
    // case EDIT_LAST_SENT_MESSAGE:
    // case REMOVE_LAST_SENT_MESSAGE:

    default:
      return state;
  }
}