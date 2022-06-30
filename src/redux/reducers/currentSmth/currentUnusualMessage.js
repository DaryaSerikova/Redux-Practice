import { 
  UPDATE_TO_NEW_CURRENT_UNUSUAL_MESSAGE,
} from "../../actions/actions";


export const currentUnusualMessage = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_TO_NEW_CURRENT_UNUSUAL_MESSAGE: //новое текущее сообщение
      return {...action.message};

    default:
      return state;
  }
}