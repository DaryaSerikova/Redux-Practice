import { 
  UPDATE_TO_NEW_CURRENT_MESSAGE,
} from "../actions/actions";


export const currentMessage = (state = '', action) => {
  switch (action.type) {
    case UPDATE_TO_NEW_CURRENT_MESSAGE: //новое текущее сообщение
      return action.value;

    default:
      return state;
  }
}