import { 
  UPDATE_TO_NEW_CURRENT_MESSAGE_ID

} from "../actions";


export const currentMessageId = (state = '', action) => {
  switch (action.type) {
    case UPDATE_TO_NEW_CURRENT_MESSAGE_ID: 
      return action.id; //action.name еще не существует, его надо создать

    default:
      return state;
  }
}