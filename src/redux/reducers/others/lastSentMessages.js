import { 
  ADD_LAST_SENT_MESSAGE,

} from "../../actions/actions";



export const lastSentMessages = (state = [], action) => { //state = {}
  switch (action.type) {
    case ADD_LAST_SENT_MESSAGE:
      return [
        ...state,
        {
          message:action.message,
          name: action.name,
        }
      ]

      
    // case EDIT_LAST_SENT_MESSAGE:
    // case REMOVE_LAST_SENT_MESSAGE:

    default:
      return state;
  }
}