import { 
  MESSAGE_IS_EDITED
} from "../actions";


export const edited = (state = false, action) => {
  switch (action.type) {
    case MESSAGE_IS_EDITED: 
      return true;

    default:
      return state;
  }
}